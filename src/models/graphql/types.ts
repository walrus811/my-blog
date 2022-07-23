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
  excerpt: string;
}

export interface Mdx
{
  frontmatter: FrontMatter;
  body: string;
}

export interface FrontMatter
{
  title: string;
  date: string;
  hero_image: ImageDataLike;
  hero_image_alt: string;
  series: string;
}

export interface Site
{
  siteMetadata: SiteMetaData;
}

export interface SiteMetaData
{
  title: string;
  description: string;
  profile: Profile;
}

export interface Profile
{
  name: string;
  description: string;
  githubUrl: string;
  email: string;
}