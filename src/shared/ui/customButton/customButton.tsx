import cn from "classnames";
import { isDefinedString } from "@/shared/libs";
import ArrowIcon from "./images/arrow.svg";
import s from "./customButton.module.scss";
import { HtmlElementPropsType } from "../../model";
import { ComponentProps, ElementType, PropsWithChildren } from "react";

type OwnProps<E extends ElementType = ElementType> = {
  appearance?: "primary" | "ghost";
  arrow?: "right" | "down";
  as?: E;
} & HtmlElementPropsType<HTMLButtonElement>;

type Props<E extends ElementType> = OwnProps<E> & Omit<ComponentProps<E>, keyof OwnProps>;

const defaultElementTag = "button";

const CustomButton = <E extends React.ElementType = typeof defaultElementTag>({
  appearance = "primary",
  arrow,
  children,
  as,
  className,
  ...otherButtonProps
}: PropsWithChildren<Props<E>>) => {
  const TagName = as || defaultElementTag;

  return (
    <TagName className={cn(s.button, s[appearance], className)} {...otherButtonProps}>
      <span className={s.inner}>
        {children}
        {isDefinedString(arrow) && (
          <span className={cn(s.icon, s[arrow])}>
            <ArrowIcon />
          </span>
        )}
      </span>
    </TagName>
  );
};

export { CustomButton };
