import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";
import {
  CategoryImage,
  DarkModeImage,
  HomeImage,
  LightModeImage,
  NumberedListImage,
} from "./Images";

deckDeckGoHighlightElement();

interface LayoutProps {
  pageTitle?: string;
  children: React.ReactNode;
  darkModeState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
}

const Layout = ({ pageTitle, children, darkModeState }: LayoutProps) => {
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
      }  flex flex-col items-center gap-8 bg-zinc-50 dark:bg-zinc-900 text-black dark:text-white`}
    >
      <header className="sticky top-0 z-50 select-none w-full flex items-center justify-between p-2 text-lg bg-zinc-100 dark:bg-zinc-800 text-black dark:text-white border-b-2 border-zinc-100 dark:border-zinc-800 shadow-md shadow-zinc-300/50 dark:shadow-zinc-700/50">
        <Link className="cursor-pointer flex items-center gap-1 group" to="/">
          <HomeImage
            className="fill-zinc-800 dark:fill-zinc-100 group-hover:fill-violet-700 dark:group-hover:fill-peach-500"
            width={HEADER_ICON_SIZE}
            height={HEADER_ICON_SIZE}
            fill="#000000"
          ></HomeImage>
          <p className="text-xl font-bold group-hover:text-violet-700 dark:group-hover:text-peach-500 group-hover:underline underline-offset-1">
            {pageTitle || data.site.siteMetadata.title}
          </p>
        </Link>
        <figure
          className="flex flex-col items-center gap-1 cursor-pointer group"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (
            <>
              <LightModeImage
                className="fill-zinc-100 group-hover:fill-peach-500"
                width={HEADER_ICON_SIZE}
                height={HEADER_ICON_SIZE}
                fill="#000000"
              ></LightModeImage>
              <figcaption className="text-xs group-hover:text-peach-500 group-hover:underline underline-offset-1">
                환하게
              </figcaption>
            </>
          ) : (
            <>
              <DarkModeImage
                className="fill-zinc-800 group-hover:fill-violet-700"
                width={HEADER_ICON_SIZE}
                height={HEADER_ICON_SIZE}
                fill="#000000"
              ></DarkModeImage>
              <figcaption className="text-xs group-hover:text-violet-700 group-hover:underline underline-offset-1">
                어둡게
              </figcaption>
            </>
          )}
        </figure>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
