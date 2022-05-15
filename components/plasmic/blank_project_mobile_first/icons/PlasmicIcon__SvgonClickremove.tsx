// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SvgonClickremoveIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SvgonClickremoveIcon(props: SvgonClickremoveIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 10 10"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={"M3.333 4.583a.417.417 0 000 .834h3.334a.417.417 0 100-.834H3.333z"}
        fill={"#000"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M.417 2.083c0-.92.746-1.666 1.666-1.666h5.834c.92 0 1.666.746 1.666 1.666v5.834c0 .92-.746 1.666-1.666 1.666H2.083c-.92 0-1.666-.746-1.666-1.666V2.083zm1.666-.833h5.834c.46 0 .833.373.833.833v5.834c0 .46-.373.833-.833.833H2.083a.833.833 0 01-.833-.833V2.083c0-.46.373-.833.833-.833z"
        }
        fill={"#000"}
      ></path>
    </svg>
  );
}

export default SvgonClickremoveIcon;
/* prettier-ignore-end */
