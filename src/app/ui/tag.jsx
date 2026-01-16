import styles from './tag.module.scss';

const Tag = ({ title, slug }) => {
  return (
    <span key={slug} className={styles.tag}>
      {title}
    </span>
  );
}

export default Tag;
