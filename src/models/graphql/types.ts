import { ImageDataLike } from "gatsby-plugin-image";

export interface AllSitePage
{
  distinct: string[];
}

export interface AllMdx
{
  nodes: MdxNode[];
}

export interface MdxNode
{
  frontmatter: FrontMatter;
  id: string;
  slug: string;
  fileAbsolutePath: string;
}

export interface FrontMatter
{
  title: string;
  date: string;
  hero_image: ImageDataLike;
  hero_image_alt: string;
}