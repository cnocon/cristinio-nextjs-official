// import { Link, NavLink } from "react-router-dom";
import Image from "next/image";
import Link from 'next/link';
import NavLinks from "./nav-links";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className={styles["site-header"]}>
      <h1 className={styles["site-title"]}>
        <Link href="/">
          <Image
            className={styles["avatar"]}
            src="/images/illustration.svg"
            alt="Illustration of Cristin O'Connor"
            width={150}
            height={150}
          />
          <span>Cristin O'Connor</span>
          <p>Frontend Software Engineer</p>
        </Link>
      </h1>
      <NavLinks />
    </header>
  );
}

export default Header;
