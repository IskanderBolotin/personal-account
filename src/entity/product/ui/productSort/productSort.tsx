import { SortButton } from "@/src/shared/ui";
import s from "./productSort.module.scss";
import { useState } from "react";
import { SortType } from "@/src/shared/ui/sortButton/sortType";
import { isDefinedFn } from "@/src/shared/libs";

type Props = {
  onClickRaitingSort?: (sort?: SortType) => void;
  onClickPriceSort?: (sort?: SortType) => void;
};

const ProductSort: React.FC<Props> = ({ onClickRaitingSort, onClickPriceSort }) => {
  const [sortTypeRaiting, setSortTypeRaiting] = useState<SortType | undefined>();
  const [sortTypePrice, setSortTypePrice] = useState<SortType | undefined>();

  const switchSortType = (
    sort: SortType | undefined,
    setSort: (s?: SortType) => void,
  ): SortType | undefined => {
    if (sort === undefined) {
      setSort("asc");
      return "asc";
    }
    if (sort === "asc") {
      setSort("desc");
      return "desc";
    }
    if (sort === "desc") {
      setSort(undefined);
      return undefined;
    }
  };

  const raitingHandler = () => {
    const currentSort = switchSortType(sortTypeRaiting, setSortTypeRaiting);
    setSortTypePrice(undefined);
    if (isDefinedFn(onClickRaitingSort)) {
      onClickRaitingSort(currentSort);
    }
  };

  const priceHandler = () => {
    const currentSort = switchSortType(sortTypePrice, setSortTypePrice);
    setSortTypeRaiting(undefined);
    if (isDefinedFn(onClickPriceSort)) {
      onClickPriceSort(currentSort);
    }
  };

  return (
    <div className={s.sort}>
      <div className={s.item}>
        <SortButton title="По рейтингу" onClick={raitingHandler} sort={sortTypeRaiting} />
      </div>
      <div className={s.item}>
        <SortButton title="По цене" onClick={priceHandler} sort={sortTypePrice} />
      </div>
    </div>
  );
};

export { ProductSort };
