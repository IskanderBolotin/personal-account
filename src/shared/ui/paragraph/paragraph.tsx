import { PropsWithChildren } from "react";
import cn from "classnames";
import s from "./paragraph.module.scss";
import { HtmlElementPropsType } from "../../model";

type Props = {
  size?: "s" | "m" | "l";
} & HtmlElementPropsType<HTMLParagraphElement>;

const Paragraph: React.FC<PropsWithChildren<Props>> = ({
  size = "m",
  children,
  className,
  ...otherProps
}) => {
  return (
    <p className={cn(s.paragraph, s[`size-${size}`], className)} {...otherProps}>
      {children}
    </p>
  );
};

export { Paragraph };
