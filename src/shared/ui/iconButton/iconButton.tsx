import cn from "classnames";
import s from "./iconButton.module.scss";
import { HtmlElementPropsType } from "../../model";
import { SVGProps } from "react";

type Props = {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  appearance?: "primary" | "ghost" | "white";
  size?: "s" | "m" | "l";
  shadow?: boolean;
} & HtmlElementPropsType<HTMLButtonElement>;

const IconButton: React.FC<Props> = ({
  icon: Icon,
  appearance = "primary",
  size = "m",
  shadow = false,
  className,
  ...otherButtonProps
}) => {
  return (
    <button
      className={cn(s.button, s[appearance], s[`size-${size}`], shadow && s.shadow, className)}
      {...otherButtonProps}
    >
      <span className={s.inner}>
        <Icon />
      </span>
    </button>
  );
};

export { IconButton };
