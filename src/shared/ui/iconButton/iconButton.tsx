import cn from "classnames";
import s from "./iconButton.module.scss";
import { HtmlElementPropsType } from "../../model";
import { SVGProps } from "react";

type Props = {
  icon: React.FC<SVGProps<SVGSVGElement>>;
  appearance?: "primary" | "ghost";
  size?: "s" | "m" | "l";
} & HtmlElementPropsType<HTMLButtonElement>;

const IconButton: React.FC<Props> = ({
  icon: Icon,
  appearance = "primary",
  size = "m",
  className,
  ...otherButtonProps
}) => {
  return (
    <button
      className={cn(s.button, s[appearance], s[`size-${size}`], className)}
      {...otherButtonProps}
    >
      <span className={s.inner}>
        <Icon />
      </span>
    </button>
  );
};

export { IconButton };
