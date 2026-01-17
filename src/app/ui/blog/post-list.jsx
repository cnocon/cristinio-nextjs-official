import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "./post-list.module.scss";
import Tag from "../tag";

const contentDir = path.join(process.cwd(), "content", "blog");

async function getAllPosts() {
  const entries = await fs.readdir(contentDir);

  const posts = await Promise.all(
    entries
      .filter((filename) => filename.endsWith(".mdx"))
      .map(async (filename) => {
        const slug = filename.replace(/\.mdx$/, "");
        const filePath = path.join(contentDir, filename);
        const source = await fs.readFile(filePath, "utf8");
        const { data } = matter(source);

        return {
          slug,
          ...data,
        };
      })
  );

  // Optionally sort by date (newest first)
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default async function PostList() {
  const posts = await getAllPosts();

  return (

      <ul className={styles.postList}>
        {posts.map((post) => (
          <li key={post.slug} className={styles.postItem}>
            <Link className={styles.postLink} href={`/blog/${post.slug}`}>
              <div className={styles.postMeta}>
                <span className={styles.postTitle}>
                  {post.title}
                </span>
                <div className={styles.tags}>
                  {post.tags.map((tag) => (
                    <Tag key={tag.slug} title={tag.title} slug={tag.slug} />
                  ))}
                </div>
                {post.date && (
                  <p className={styles.pubDate}>
                    Published&nbsp;
                    <time className={styles.postDate} dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </p>
                )}
              </div>
              {post.description && (
                <p className={styles.postDescription}>{post.description}</p>
              )}
            </Link>
          </li>
        ))}
      </ul>
  );
}
