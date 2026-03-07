import s from "./sortButton.module.scss";
import { HtmlElementPropsType } from "../../model";
import { SortType } from "./sortType";
import cn from "classnames";
import SortIcon from "./images/sort.svg";
import { isDefinedFn, isDefinedString } from "../../libs";
import { MouseEvent } from "react";

type Props = {
  sort?: SortType;
  title: string;
} & HtmlElementPropsType<HTMLButtonElement>;

const SortButton: React.FC<Props> = ({ sort, title, onClick }) => {
  const isActive = isDefinedString(sort);
  const isDESC = sort === "desc";

  const buttonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDefinedFn(onClick)) {
      onClick(e);
    }
  };

  return (
    <button className={cn(s.sort, isDESC && s.desc, isActive && s.active)} onClick={buttonHandler}>
      <span className={s.inner}>
        <span className={s.icon}>
          <SortIcon />
        </span>
        <span className={s.title}>{title}</span>
      </span>
    </button>
  );
};

export { SortButton };
