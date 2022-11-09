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
      className={classNames(
        "border  border-solid border-[#1CE6AD] text-[16px] font-Inter-Regular flex justify-center item-center text-center py-2 bg-[#061217]",
        width === "md" ? "w-[380px]" : "w-[795px]"
      )}
    >
      {renderHTML(text)}
    </div>
  );
}
