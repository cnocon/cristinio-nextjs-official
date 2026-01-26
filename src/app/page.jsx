import pageStyles from "./page.module.scss";
import styles from "./homepage.module.scss";
import PostList from "./ui/blog/post-list";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import ConnectRow from "./ui/connect-row";

export default function Page() {
  return (
    <section className={`${pageStyles.page} ${styles.homePage}`}>
      <div className={styles.welcome}>
        <blockquote className={styles.bannerBlockquote}>
          <p><ImQuotesLeft />How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.<ImQuotesRight /></p>
          <p><cite>— Annie Dillard</cite></p>

        </blockquote>
      </div>
      <div className={styles.postListSection}>
        <header><h2><span>Latest Posts</span></h2></header>
        <PostList />
      </div>
      <div className={styles.connectSection}>
        <header><h2><span>Connect</span></h2></header>
        <ConnectRow />
      </div>
    </section>
  )
}
