import { displayDate, isDefinedNumber, isDefinedString } from "@/src/shared/libs";
import { ReviewDto } from "../../model";
import UserIcon from "./images/user.svg";
import s from "./productReview.module.scss";
import { Raiting } from "@/src/shared/ui";

type Props = {
  review: ReviewDto;
};

const ProductReview: React.FC<Props> = ({ review }) => {
  const { name, title, description, rating, createdAt } = review;

  return (
    <div className={s.reivew}>
      <div className={s.header}>
        <div className={s.headerItem}>
          <div className={s.personal}>
            <span className={s.icon}>
              <UserIcon />
            </span>
            <span className={s.title}>
              <span className={s.name}>{name}:</span> {isDefinedString(title) && title}
            </span>
          </div>
        </div>
        <div className={s.headerItem}>
          <div className={s.mark}>
            <span className={s.time}>{displayDate({ date: createdAt })}</span>
            <div className={s.raiting}>
              <Raiting defaultValue={isDefinedNumber(rating) ? rating : 0} isNotEditable />
            </div>
          </div>
        </div>
      </div>
      {isDefinedString(description) && <p className={s.description}>{description}</p>}
    </div>
  );
};

export { ProductReview };
