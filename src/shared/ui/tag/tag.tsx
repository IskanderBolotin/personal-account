import cn from "classnames";
import { HtmlElementPropsType } from "../../model";
import s from "./tag.module.scss";
import { TagType } from "./tagType";

type Props = { type?: TagType } & HtmlElementPropsType<HTMLDivElement>;

const Tag: React.FC<React.PropsWithChildren<Props>> = ({
  type = "common",
  children,
  ...otherProps
}) => {
  return (
    <span {...otherProps} className={cn(s.tag, s[type])}>
      <span className={s.inner}>{children}</span>
    </span>
  );
};

export { Tag };
