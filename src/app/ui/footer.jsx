import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Cristin O'Connor. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
