import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image";
import * as React from "react";
import Layout, { SelectViewMode } from "../components/Layout";
import useTailwindCssDarkMode from "../hooks/useTailwindCssDarkMode";
import { AllMdx, AllSitePage } from "../models/graphql/types";
import PostPageNode, { toPostPageNode } from "../models/PostPageNode";

interface IndexPageProps {
  data: {
    allSitePage: AllSitePage;
    allMdx: AllMdx;
  };
}

const IndexPage = ({ data }: IndexPageProps) => {
  const darkModeState = useTailwindCssDarkMode();
  const rootNode = toPostPageNode(data.allSitePage.distinct, data.allMdx.nodes);
  const postNode = rootNode.children[0];

  function renderPostPageNode(rootNode: PostPageNode<string>, headerLevel = 1) {
    if (!rootNode) return null;
    return <div className=""></div>;
  }

  return (
    <Layout darkModeState={darkModeState} viewMode={SelectViewMode.Category}>
      <section className="flex gap-4">
        {postNode.children.length > 0 ? (
          postNode.children.map((n) => renderPostPageNode(n, 2))
        ) : (
          <p>포스트가 없습니다.</p>
        )}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query {
    allSitePage(filter: { path: { glob: "/post/**" } }) {
      distinct(field: path)
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          date(formatString: "YYYY년 MM월 DD일")
          hero_image {
            childImageSharp {
              gatsbyImageData(
                width: 300
                aspectRatio: 1
                placeholder: BLURRED
                formats: [AUTO, WEBP]
                quality: 100
                transformOptions: { fit: CONTAIN }
              )
            }
          }
          hero_image_alt
        }
        id
        slug
        fileAbsolutePath
      }
    }
  }
`;

export default IndexPage;
