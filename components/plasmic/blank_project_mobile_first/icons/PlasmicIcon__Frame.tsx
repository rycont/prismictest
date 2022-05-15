// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FrameIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FrameIcon(props: FrameIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.939 9.765a1 1 0 11-1.813-.845 1 1 0 011.813.845zM8.92 13.874a1 1 0 10.845-1.813 1 1 0 00-.846 1.813zm4.954 1.206a1 1 0 11-1.813-.845 1 1 0 011.813.846zm.361-3.141a1 1 0 10.845-1.813 1 1 0 00-.845 1.813z"
        }
        fill={"#687ECE"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M17.071 1.124a6 6 0 00-7.973 2.902L4.026 14.902a6 6 0 0010.876 5.072l5.072-10.876a6 6 0 00-2.903-7.974zm-3.136 16.192l3.38-7.25-7.25-3.382-3.38 7.25 7.25 3.382zm-.846 1.812l-7.25-3.38a4 4 0 107.25 3.38zm3.137-16.191a4 4 0 011.935 5.316l-7.25-3.381a4 4 0 015.315-1.935z"
        }
        fill={"#687ECE"}
      ></path>
    </svg>
  );
}

export default FrameIcon;
/* prettier-ignore-end */
