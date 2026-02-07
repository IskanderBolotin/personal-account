import s from "./title.module.scss";

type OwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
};

type Props<E extends React.ElementType> = OwnProps<E> &
  Omit<React.ComponentProps<E>, keyof OwnProps>;

const defaultElementTag = "h1";

const Title = <E extends React.ElementType = typeof defaultElementTag>({
  children,
  as,
  ...otherProps
}: React.PropsWithChildren<Props<E>>) => {
  const TagName = as || defaultElementTag;

  return (
    <TagName className={s.title} {...otherProps}>
      {children}
    </TagName>
  );
};

export { Title };
