import styles from "../page.module.scss";
import { FaRss } from "react-icons/fa";
import PostList from "../ui/blog/post-list"

export default async function Page() {
  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h2 className={styles["page-title"]}><span>Blog <FaRss /></span></h2>
      </header>

      <div className={styles.content}>
        <section className={styles.postListContainer}>
          <PostList />
        </section>
      </div>
    </section>
  );
}
