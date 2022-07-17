import { graphql } from "gatsby";
import * as React from "react";
import Layout, { SelectViewMode } from "../components/Layout";
import PostSummary from "../components/PostSummary";
import useTailwindCssDarkMode from "../hooks/useTailwindCssDarkMode";
import { AllMdx, AllSitePage } from "../models/graphql/types";
import { toPostPageItemList } from "../models/PostPageItem";

interface IndexPageProps {
  data: {
    allSitePage: AllSitePage;
    allMdx: AllMdx;
  };
}

const IndexPage = ({ data }: IndexPageProps) => {
  const darkModeState = useTailwindCssDarkMode();
  const postPageItemList = toPostPageItemList(
    data.allSitePage.distinct,
    data.allMdx.nodes
  );

  return (
    <Layout darkModeState={darkModeState} viewMode={SelectViewMode.Category}>
      <section className="flex flex-wrap gap-4 justify-center">
        {postPageItemList.length > 0 ? (
          postPageItemList.map((item) => (
            <PostSummary key={item.mdx.id} postPageItem={item}></PostSummary>
          ))
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
        excerpt(truncate: true, pruneLength: 120)
      }
    }
  }
`;

export default IndexPage;
