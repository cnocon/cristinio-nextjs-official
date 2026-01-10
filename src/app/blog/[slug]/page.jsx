import { MDXRemote } from "next-mdx-remote/rsc";
import styles from "../../page.module.scss";
import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";

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
  h1: (props) => <h1 className="my-heading" {...props} />,
  a: (props) => <a className="my-link" {...props} />,
  code: ({ inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  // Add more overrides as needed
};


export default async function Page({ params }) {
  const { slug } = await params;
  const { frontmatter, content } = await getPostBySlug(slug);

  return (
    <section className={styles.page}>
      <header className={styles.header}>
        <h2 className={styles["page-title"]}>{frontmatter.title}</h2>
      </header>

      <article>
        <MDXRemote source={content} components={components} />
      </article>
    </section>
  )
}
