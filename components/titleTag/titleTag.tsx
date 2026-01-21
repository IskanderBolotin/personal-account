import s from "./titleTag.module.scss";

type OwnProps<E extends React.ElementType = React.ElementType> = {
  as?: E;
};

type Props<E extends React.ElementType> = OwnProps<E> & Omit<React.ComponentProps<E>, keyof OwnProps>;

const defaultElementTag = "h1";

const TitleTag = <E extends React.ElementType = typeof defaultElementTag>({ children, as, ...otherProps }: React.PropsWithChildren<Props<E>>) => {
  const TagName = as || defaultElementTag;
  
  return (
    <TagName className={s.title} { ...otherProps }>
      {
        children
      }
    </TagName>
  )
};

export { TitleTag };