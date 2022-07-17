import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React, { useEffect, useRef } from "react";
import useRollingText from "../hooks/useRollingText";
import { MdxNode } from "../models/graphql/types";
import PostPageItem from "../models/PostPageItem";
import * as styles from "./PostSummary.module.css";

interface PostSummaryProps {
  postPageItem: PostPageItem;
}

const PostSummary = ({ postPageItem }: PostSummaryProps) => {
  const image = getImage(postPageItem.mdx.frontmatter.hero_image);

  const [fireRollingText, stopRollingText] = useRollingText(
    postPageItem.mdx.excerpt
  );

  return (
    <article
      className={`${styles.PostSummaryWidth} group hover:scale-105 cursor-pointer`}
    >
      <Link to={postPageItem.fullPath}>
        <figure className="grid grid-rows-[32px_130px_90px_120px] grid-cols-3">
          <p className="row-start-1 row-end-2 col-start-3 col-end-4 z-10 flex justify-center items-center opacity-80 group-hover:opacity-100 text-white p-0.5 bg-black text-xs rounded-tr-xl">
            {postPageItem.mdx.frontmatter.date}
          </p>
          {image && (
            <GatsbyImage
              className="row-start-1 row-end-5 col-start-1 col-end-4 w-full rounded-xl z-0"
              image={image}
              alt={postPageItem.mdx.frontmatter.hero_image_alt}
            />
          )}
          <figcaption className="row-start-4 row-end-5 col-start-1 col-end-4 z-10 opacity-70 text-white p-4 bg-black text-sm rounded-br-xl rounded-bl-xl grid grid-row-[12px_108px] gap-1 group-hover:opacity-80 group-hover:row-start-3">
            <h3 className="row-start-1 row-end-2 text-base font-bold overflow-hidden whitespace-nowrap text-ellipsis group-hover:text-marigold-500 group-hover:whitespace-normal">
              {postPageItem.mdx.frontmatter.title}
            </h3>
            <p
              onMouseMove={fireRollingText}
              onMouseLeave={stopRollingText}
              onTouchMove={fireRollingText}
              onTouchEnd={stopRollingText}
              className="row-start-2 row-end-3 text-gray-300 overflow-hidden p-1 hover:underline hover:underline-offset-1"
            >
              {postPageItem.mdx.excerpt}
            </p>
          </figcaption>
        </figure>
        <div className="row-start-4 row-end-6 col-start-1 col-end-4">
          {(() => {
            if (postPageItem.mdx.frontmatter.series)
              return postPageItem.mdx.frontmatter.series;
          })()}
        </div>
      </Link>
    </article>
  );
};

export default PostSummary;
