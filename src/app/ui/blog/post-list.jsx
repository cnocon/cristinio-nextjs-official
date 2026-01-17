import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Card from "./card";
import styles from "./post-list.module.scss";

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
          <Card post={post} />
        </li>
      ))}
    </ul>
  );
}
