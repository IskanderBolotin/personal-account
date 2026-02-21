import { PropsWithChildren } from "react";
import cn from "classnames";
import s from "./paragraph.module.scss";
import { HtmlElementPropsType } from "../../model";

type Props = {
  size?: "s" | "m" | "l";
} & HtmlElementPropsType<HTMLParagraphElement>;

const Paragraph: React.FC<PropsWithChildren<Props>> = ({ size = "m", children, ...otherProps }) => {
  return (
    <p className={cn(s.paragraph, s[`size-${size}`])} {...otherProps}>
      {children}
    </p>
  );
};

export { Paragraph };
