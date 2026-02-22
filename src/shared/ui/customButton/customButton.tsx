import cn from "classnames";
import { isDefinedString } from "@/shared/libs";
import ArrowIcon from "./images/arrow.svg";
import s from "./customButton.module.scss";
import { HtmlElementPropsType } from "../../model";

type Props = {
  appearance?: "primary" | "ghost";
  arrow?: "right" | "down";
} & HtmlElementPropsType<HTMLButtonElement>;

const CustomButton: React.FC<React.PropsWithChildren<Props>> = ({
  appearance = "primary",
  arrow,
  children,
  className,
  ...otherButtonProps
}) => {
  return (
    <button className={cn(s.button, s[appearance], className)} {...otherButtonProps}>
      <span className={s.inner}>
        {children}
        {isDefinedString(arrow) && (
          <span className={cn(s.icon, s[arrow])}>
            <ArrowIcon />
          </span>
        )}
      </span>
    </button>
  );
};

export { CustomButton };
