import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import useTailwindCssDarkMode from "../../hooks/useTailwindCssDarkMode";
import { MDXProvider, useMDXComponents } from "@mdx-js/react";

import { BODY_BACKGROUND_CLASSES } from "../../constants";
import { Mdx, Profile, Site, SiteMetaData } from "../../models/graphql/types";
import ProfileCard from "../../components/ProfileCard";

interface PostProps {
  data: {
    mdx: Mdx;
    site: Site;
  };
}

const Post = ({ data }: PostProps) => {
  const profile = data.site.siteMetadata.profile as Profile;
  const a = useMDXComponents();

  const image = getImage(data.mdx.frontmatter.hero_image);
  const frontMatter = data.mdx.frontmatter;
  const darkModeState = useTailwindCssDarkMode(BODY_BACKGROUND_CLASSES);

  return (
    <Layout darkModeState={darkModeState}>
      <article className="flex flex-col items-center ml-0 mr-0 md:ml-16 md:mr-16 p-8 md:pl-4 md:pr-4">
        <h1 className="text-5xl">{frontMatter.title}</h1>
        <p>{frontMatter.date}</p>
        <hr className="w-full mt-4 mb-4"></hr>
        {image && (
          <GatsbyImage
            image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
          />
        )}
        <section className={`prose dark:prose-invert`}>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </section>
        <ProfileCard
          name={profile.name}
          description={profile.description}
          email={profile.email}
          githubUrl={profile.githubUrl}
        ></ProfileCard>
        <div className="h-96 bg-red-800">댓글 같은 게 들어가지 않을까?</div>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    site {
      siteMetadata {
        title
        description
        profile {
          name
          description
          email
          githubUrl
        }
      }
    }
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export default Post;
