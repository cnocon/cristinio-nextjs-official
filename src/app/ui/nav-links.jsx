'use client';


import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import styles from "./nav-links.module.scss";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className={styles["site-nav"]}>
      <ul>
        <li>
          <Link
            href="/resume"
            aria-current={pathname === '/resume' ? 'page' : undefined}
            className={clsx(
              styles['nav-link'], styles['current'],  pathname === '/resume'
            )}
          >
            Résumé
          </Link>
        </li>
        <li>
          <Link
            href="/portfolio"
            aria-current={pathname === '/portfolio' ? 'page' : undefined}
            className={clsx(
              styles['nav-link'], styles['current'],  pathname === '/portfolio'
          )}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            href="/blog"
            aria-current={pathname === '/blog' ? 'page' : undefined}
            className={clsx(
              styles['nav-link'], styles['current'],  pathname === '/blog'
          )}>
            Blog
          </Link>
        </li>
      </ul>
    </nav>
  )
}
