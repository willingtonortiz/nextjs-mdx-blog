import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const root = process.cwd();

console.log("root", root);

export const getFiles = () => fs.readdirSync(path.join(root, "data"));

export const getFileBySlug = async (slug: string) => {
  const mdxSource = fs.readFileSync(
    path.join(root, "data", `${slug}.mdx`),
    "utf8"
  );

  const { data, content } = matter(mdxSource);
  const source = await serialize(content);

  return {
    frontMatter: {
      slug,
      ...data,
    },
    source,
  };
};

export const getAllFilesMetadata = () => {
  const files = getFiles();
  return files.reduce((allPosts: any[], postSlug) => {
    const mdxSource = fs.readFileSync(
      path.join(root, "data", postSlug),
      "utf8"
    );

    const { data } = matter(mdxSource);
    return [{ ...data, slug: postSlug.replace(".mdx", "") }, ...allPosts];
  }, []);
};
