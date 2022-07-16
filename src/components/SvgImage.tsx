import React from "react";
import { ReactNode } from "react";

export interface SvgProps {
  width: number;
  height: number;
  fill: string;
  className: string;
  viewBox: string;
  paths: ReactNode;
}

export type DefinedSvgProps = Omit<SvgProps, "viewBox" | "paths">;

const SvgImage = (props: SvgProps) => {
  const { width, height, fill, className, viewBox, paths } = props;
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
    >
      {paths}
    </svg>
  );
};

export default SvgImage;
