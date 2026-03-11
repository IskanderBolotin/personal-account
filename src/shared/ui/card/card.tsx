import { PropsWithChildren } from "react";
import cn from "classnames";
import s from "./card.module.scss";

type Props = {
  type?: "white" | "gray";
};

const Card: React.FC<PropsWithChildren<Props>> = ({ type = "white", children }) => {
  return <div className={cn(s.wrapper, s[type])}>{children}</div>;
};

export { Card };
