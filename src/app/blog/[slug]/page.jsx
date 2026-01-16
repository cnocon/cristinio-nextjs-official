import { MDXRemote } from "next-mdx-remote/rsc";
import pageStyles from "../../page.module.scss";
import styles from "./blog-post.module.scss";
import fs from "fs/promises";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight} from "react-syntax-highlighter/dist/esm/styles/hljs";
import Tag from "../../ui/tag";

// process.cwd() resolves to the repo root when the app runs.
// Joining content/blog ensures it points to a top-level content/blog directory regardless of OS path separators.
const contentDir = path.join(process.cwd(), "content", "blog");

export async function getPostBySlug(slug) {
  const filePath = path.join(contentDir, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    frontmatter: data,
    content,
  };
}

async function getAllPostSlugs() {
  const entries = await fs.readdir(contentDir);
  return entries
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      slug: filename.replace(/\.mdx$/, ""),
    }));
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}


const components = {
  h1: (props) => <h1 className={styles.title} {...props} />,
  a: (props) => <a className={styles.link} {...props} />,
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} style={a11yLight} PreTag="div" {...props}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default async function Page({ params }) {
  const { slug } = await params;
  const { frontmatter, content } = await getPostBySlug(slug);

  return (
    <section className={`${pageStyles.page} ${styles.blogPost}`}>
      <header className={`${pageStyles.header} ${styles.postHeader}`}>
        <h2 className={styles.postTitle}>
          <span>{frontmatter.title}</span>
        </h2>
        <div className={styles.postDate}>Published&nbsp;
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time></div>
        <div className={styles.tags}>
          {frontmatter.tags.map((tag) => (
            <Tag key={tag.slug} title={tag.title} slug={tag.slug} />
          ))}
        </div>
      </header>

      <article className={styles.blogPostContent}>
        <MDXRemote source={content} components={components} options={{
          mdxOptions: {
            remarkPlugins: [remarkToc],
            rehypePlugins: [
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ],
          },
        }}/>
      </article>
    </section>
  )
}
