import cn from "classnames";
import s from "./title.module.scss";

type OwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
  level?: 1 | 2 | 3;
};

type Props<E extends React.ElementType> = OwnProps<E> &
  Omit<React.ComponentProps<E>, keyof OwnProps>;

const defaultElementTag = "h1";

const Title = <E extends React.ElementType = typeof defaultElementTag>({
  children,
  as,
  level = 1,
  ...otherProps
}: React.PropsWithChildren<Props<E>>) => {
  const TagName = as || defaultElementTag;

  return (
    <TagName className={cn(s.title, s[`level-${level}`])} {...otherProps}>
      {children}
    </TagName>
  );
};

export { Title };
