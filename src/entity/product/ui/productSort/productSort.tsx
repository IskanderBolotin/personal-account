import { SortButton } from "@/src/shared/ui";
import s from "./productSort.module.scss";

const ProductSort: React.FC = () => {
  return (
    <div className={s.sort}>
      <div className={s.item}>
        <SortButton title="По рейтингу" />
      </div>
      <div className={s.item}>
        <SortButton title="По цене" />
      </div>
    </div>
  );
};

export { ProductSort };
