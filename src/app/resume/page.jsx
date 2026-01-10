import styles from "../page.module.scss";

export default function Page() {
  return (
    <section className={styles.page}>
      <header className={styles['header']}>
        <h2 className={styles['page-title']}>Resume Page</h2>
      </header>
    </section>
  )
}
