import styles from "../page.module.scss";
import { RiPagesLine } from "react-icons/ri";

export default function Page() {
  return (
    <section className={styles.page}>
      <header className={styles['header']}>
        <h2 className={styles['page-title']}><span>Portfolio <RiPagesLine /></span></h2>
      </header>
    </section>
  )
}
