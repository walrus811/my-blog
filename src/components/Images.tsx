import React from "react";
import SvgImage, { DefinedSvgProps } from "./SvgImage";

export type SvgImageButton = (props: DefinedSvgProps) => JSX.Element;

export const DarkModeImage = (props: DefinedSvgProps) =>
  SvgImage({
    ...props,
    viewBox: "0 0 24 24",
    paths: (
      <>
        <rect fill="none" height="24" width="24" />
        <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
      </>
    ),
  });

export const LightModeImage = (props: DefinedSvgProps) =>
  SvgImage({
    ...props,
    viewBox: "0 0 24 24",
    paths: (
      <>
        <rect fill="none" height="24" width="24" />
        <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41 l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z" />{" "}
      </>
    ),
  });

export const CategoryImage = (props: DefinedSvgProps) =>
  SvgImage({
    ...props,
    viewBox: "0 0 24 24",
    paths: (
      <>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 2l-5.5 9h11z" />
        <circle cx="17.5" cy="17.5" r="4.5" />
        <path d="M3 13.5h8v8H3z" />{" "}
      </>
    ),
  });

export const NumberedListImage = (props: DefinedSvgProps) =>
  SvgImage({
    ...props,
    viewBox: "0 0 24 24",
    paths: (
      <>
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z" />
      </>
    ),
  });
