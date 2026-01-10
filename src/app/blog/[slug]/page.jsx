import styles from "../../page.module.scss";
export default async function Page({ params }) {
  const { slug } = await params;

  return (
    <section className={styles.page}>
      <header className={styles['header']}>
        <h2 className={styles['page-title']}>{slug}</h2>
      </header>
    </section>
  )
}
