import classNames from "classnames";
export interface Props {
  height?: "lg" | "sm";
}
export default function index({ height }: Props) {
  return (
    <span
      className={classNames(
        "block w-full h-[1px] bg-gradient-to-r from-xc1-a to-xc1-b",
        { "h-[1.5px]": height === "sm" },
        { "h-[3px]": height === "lg" }
      )}
    ></span>
  );
}
