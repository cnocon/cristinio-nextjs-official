
import { FaCodepen, FaGithub, FaStackOverflow } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";

import styles from "./connect-row.module.scss"

export default function ConnectRow () {
  return (
    <div className={styles.connectRow}>
      <ul class={styles.connectList}>
        <li>
          <a href="https://codepen.io/cnocon" rel="noreferrer" target="_blank">
            <FaCodepen />
            <span>
              CodePen
            </span>
          </a>
        </li>
        <li>
          <a href="https://github.com/cnocon" rel="noreferrer" target="_blank">
            <FaGithub />
            <span>
              GitHub
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/cristinoconnor" rel="noreferrer" target="_blank">
            <TiSocialLinkedinCircular />
            <span>
              LinkedIn
            </span>
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/2187039/cnocon" rel="noreferrer" target="_blank">
            <FaStackOverflow />
            <span>Stack Overflow</span>
          </a>
        </li>
        <li>
          <a href="mailto:her@cristin.io" rel="noreferrer" target="_blank">
            <MdMailOutline />
            <span>
              Email
            </span>
          </a>
        </li>
      </ul>
    </div>
  )
}
