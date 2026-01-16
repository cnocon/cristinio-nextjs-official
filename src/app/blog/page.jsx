import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import styles from "../page.module.scss";
import blogStyles from "./blog.module.scss";
import { FaRss } from "react-icons/fa";


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

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h2 className={styles["page-title"]}><span>Blog <FaRss /></span></h2>
      </header>

      <div className={styles.content}>
        <ul className={blogStyles.postList}>
          {posts.map((post) => (
            <li key={post.slug} className={blogStyles.postItem}>
              <Link className={blogStyles.postLink} href={`/blog/${post.slug}`}>
                <div className={blogStyles.postMeta}>
                  <span className={blogStyles.postTitle}>{post.title}</span>
                  {post.date && (
                    <time className={blogStyles.postDate} dateTime={post.date}>
                      {post.date}
                    </time>
                  )}
                </div>
                {post.description && (
                  <p className={blogStyles.postDescription}>{post.description}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
