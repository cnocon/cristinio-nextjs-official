import pageStyles from "./page.module.scss";
import styles from "./homepage.module.scss";

export default function Page() {
  return (
    <section className={pageStyles.page}>
      <div className={styles.welcome}>
        <blockquote className={styles.blockquote}>
          <p>Cristin O'Connor is a lifesaver! Being new to Gatsby.js, I was having a difficult time finding a solution for a blocker. I scoured documentation, tried every combination of keywords, and and went to every forum I could think of to find the solution. I came across Cristin's reached out. Cristin was responsive, and knowledgeable. She was also kind and concise which was exactly what a newbie like me needed."</p>
          <p>
            <cite>&mdash; Mariah W., Freelancer</cite>
          </p>
        </blockquote>
      </div>

      <div className={styles.connectSection}>
        <header><h2>Connect</h2></header>
        <ul class={styles.connectList}>
          <li>
            <a href="https://codepen.io/cnocon" rel="noreferrer" target="_blank">CodePen</a>
          </li>
          <li>
            <a href="https://github.com/cnocon" rel="noreferrer" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/cristinoconnor" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://stackoverflow.com/users/2187039/cnocon" rel="noreferrer" target="_blank">
              Stack Overflow
            </a>
          </li>
          <li>
            <a href="mailto:her@cristin.io" rel="noreferrer" target="_blank">
              Email
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
