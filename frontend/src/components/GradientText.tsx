import classNames from "classnames";
import React from "react";
export interface Props {
  text: string;
  width?: "lg" | "md";
}
const renderHTML = (escapedHTML: string) =>
  React.createElement("div", {
    dangerouslySetInnerHTML: { __html: escapedHTML },
  });
export default function index(props: Props) {
  const { text, width } = props;
  return (
    <div
      style={{ borderImage: "linear-gradient(to right,#79D5A8,#D5F97D) 1" }}
      className={classNames(
        "border  border-solid text-[16px] font-IBMPlexMono-Regular flex justify-center item-center text-center py-2 bg-[#061217]",
        width === "md" ? "w-[380px]" : "w-[795px]"
      )}
    >
      {renderHTML(text)}
    </div>
  );
}
