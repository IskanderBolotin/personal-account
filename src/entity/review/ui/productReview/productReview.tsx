import { isDefinedString } from "@/src/shared/libs";
import { ReviewDto } from "../../model";
import s from "./productReview.module.scss";

type Props = {
  review: ReviewDto;
};

const ProductReview: React.FC<Props> = ({ review }) => {
  const { name, title, description, rating, createdAt } = review;

  return (
    <div className={s.reivew}>
      <div className={s.header}>
        <div className={s.headerItem}></div>
        <div className={s.headerItem}></div>
      </div>
      {isDefinedString(description) && <p className={s.description}>{description}</p>}
    </div>
  );
};

export { ProductReview };
