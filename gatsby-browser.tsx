import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import "./src/styles/global.css";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return element;
};
