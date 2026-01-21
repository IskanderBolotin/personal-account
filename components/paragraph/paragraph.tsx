import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import cn from "classnames";
import s from "./paragraph.module.scss";

type Props = {
  size?: "s" | "m" | "l"
} & DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>;

const Paragraph: React.FC<PropsWithChildren<Props>> = ({ size = "m", children }) => {
  return (
    <p className={cn(s.paragraph, s[`size-${size}`])}>
      {
        children
      }
    </p>
  )
};

export { Paragraph };