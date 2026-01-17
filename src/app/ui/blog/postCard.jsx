import Link from "next/link";
import Tag from "../tag";
import styles from "./post-card.module.scss"

const PostCard = ({ post }) => (
  <Link className={styles.postLink} href={`/blog/${post.slug}`}>
    <div className={styles.postMeta}>
      <span className={styles.postTitle}>
        {post.title}
      </span>
      <div className={styles.tags}>
        {post.tags.map((tag) => (
          <Tag key={tag.slug} title={tag.title} slug={tag.slug} />
        ))}
      </div>
      {post.date && (
        <p className={styles.pubDate}>
          Published&nbsp;
          <time className={styles.postDate} dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </p>
      )}
    </div>
    {post.description && (
      <p className={styles.postDescription}>{post.description}</p>
    )}
  </Link>
)

export default PostCard;
