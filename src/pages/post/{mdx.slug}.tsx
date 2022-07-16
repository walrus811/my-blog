import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout, { SelectViewMode } from "../../components/Layout";
import useTailwindCssDarkMode from "../../hooks/useTailwindCssDarkMode";

const Post = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const darkModeState = useTailwindCssDarkMode();
  return (
    <Layout darkModeState={darkModeState} viewMode={SelectViewMode.Post}>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>Posted: {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
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
