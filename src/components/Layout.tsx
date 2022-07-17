import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import {
  CategoryImage,
  DarkModeImage,
  LightModeImage,
  NumberedListImage,
} from "./Images";

deckDeckGoHighlightElement();

export enum SelectViewMode {
  Category = 0,
  Series = 1,
  Post = 2,
}

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
  darkModeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  viewMode: SelectViewMode;
}

const Layout = ({
  pageTitle,
  children,
  darkModeState,
  viewMode,
}: LayoutProps) => {
  const [darkMode, setDarkMode] = darkModeState;
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const HEADER_ICON_SIZE = 24;

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      }  flex flex-col items-center gap-8 bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white overflow-auto`}
    >
      <header className="sticky top-0 z-50 select-none w-full flex items-center justify-between p-2 text-lg bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-b-2 border-zinc-100 dark:border-zinc-800 shadow-md shadow-zinc-300/50 dark:shadow-zinc-700/50">
        <Link className="cursor-pointer text-xl font-bold" to="/">
          {pageTitle || data.site.siteMetadata.title}
        </Link>
        <div className="flex items-center gap-3">
          <figure className="flex flex-col items-center gap-1 cursor-pointer">
            <CategoryImage
              className={`${
                viewMode === SelectViewMode.Category
                  ? "fill-indigo-700 dark:fill-peach-500"
                  : "fill-zinc-800 dark:fill-zinc-100"
              }`}
              width={HEADER_ICON_SIZE}
              height={HEADER_ICON_SIZE}
              fill="#000000"
            ></CategoryImage>
            <figcaption
              className={`text-xs ${
                viewMode === SelectViewMode.Category
                  ? "text-indigo-700 dark:text-peach-500 font-bold"
                  : ""
              }`}
            >
              <Link to="/">카테고리</Link>
            </figcaption>
          </figure>
          <figure className="flex flex-col items-center gap-1 cursor-pointer">
            <NumberedListImage
              className={`${
                viewMode === SelectViewMode.Series
                  ? "fill-indigo-700 dark:fill-peach-500"
                  : "fill-zinc-800 dark:fill-zinc-100"
              }`}
              width={HEADER_ICON_SIZE}
              height={HEADER_ICON_SIZE}
              fill="#000000"
            ></NumberedListImage>
            <figcaption
              className={`text-xs ${
                viewMode === SelectViewMode.Series
                  ? "text-indigo-700 dark:text-peach-500 font-bold"
                  : ""
              }`}
            >
              <Link to="/series">시리즈</Link>
            </figcaption>
          </figure>
          <figure
            className="flex flex-col items-center gap-1 cursor-pointer"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <>
                <LightModeImage
                  className="fill-zinc-100"
                  width={HEADER_ICON_SIZE}
                  height={HEADER_ICON_SIZE}
                  fill="#000000"
                ></LightModeImage>
                <figcaption className="text-xs">환하게</figcaption>
              </>
            ) : (
              <>
                <DarkModeImage
                  className="fill-zinc-800"
                  width={HEADER_ICON_SIZE}
                  height={HEADER_ICON_SIZE}
                  fill="#000000"
                ></DarkModeImage>
                <figcaption className="text-xs">어둡게</figcaption>
              </>
            )}
          </figure>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
