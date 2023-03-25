import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";

import { getFileBySlug, getFiles } from "../lib/mdx";
import MDXComponents from "../components/MDXComponents";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params ?? { slug: "" };

  const { frontMatter, source } = await getFileBySlug(slug as string);

  return {
    props: {
      frontMatter,
      source,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getFiles();
  const paths = posts.map((post) => ({
    params: {
      slug: post.replace(/\.mdx?$/, ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

type Props = {
  frontMatter: {};
  source: {
    compiledSource: string;
  };
};

const Post: NextPage<Props> = ({ frontMatter, source }) => {
  return <MDXRemote {...source} components={MDXComponents} />;
};

export default Post;
