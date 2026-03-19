import { HHDataType } from "@/src/entity/topPage/model";
import { CategoryTitle } from "@/src/shared/ui";
import StarIcon from "./images/star.svg";
import cn from "classnames";
import s from "./vacancy.module.scss";
import { displayPrice, isDefinedNumber } from "@/src/shared/libs";

type Props = {
  title?: string;
  wrapperClassName?: string;
} & Partial<HHDataType>;

const Vacancy: React.FC<Props> = ({
  title,
  wrapperClassName,
  count,
  juniorSalary,
  middleSalary,
  seniorSalary,
}) => {
  return (
    <section className={wrapperClassName}>
      <div className={s.title}>
        <CategoryTitle
          title={`Вакансии - ${title}`}
          tagTitle="hh.ru"
          tagType="red"
          titleAs="h2"
          titleLevel={2}
        />
      </div>
      <div className={s.wrapper}>
        {isDefinedNumber(count) && (
          <div className={s.item}>
            <div className={s.card}>
              <div className={s.center}>
                <div className={s.cardTitle}>Всего вакансий</div>
                <div className={s.count}>{displayPrice({ value: count, currency: "" })}</div>
              </div>
            </div>
          </div>
        )}
        <div className={cn(s.item, s.itemFull)}>
          <div className={s.card}>
            <div className={s.levels}>
              {isDefinedNumber(juniorSalary) && (
                <div className={s.levelItem}>
                  <div className={s.center}>
                    <div className={s.cardTitle}>Начальный</div>
                    <div className={s.price}>{displayPrice({ value: juniorSalary })}</div>
                    <div className={s.stars}>
                      <div className={cn(s.starItem, s.active)}>
                        <StarIcon />
                      </div>
                      <div className={s.starItem}>
                        <StarIcon />
                      </div>
                      <div className={s.starItem}>
                        <StarIcon />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {isDefinedNumber(middleSalary) && (
                <div className={s.levelItem}>
                  <div className={s.center}>
                    <div className={s.cardTitle}>Средний</div>
                    <div className={s.price}>{displayPrice({ value: middleSalary })}</div>
                    <div className={s.stars}>
                      <div className={cn(s.starItem, s.active)}>
                        <StarIcon />
                      </div>
                      <div className={cn(s.starItem, s.active)}>
                        <StarIcon />
                      </div>
                      <div className={s.starItem}>
                        <StarIcon />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {isDefinedNumber(seniorSalary) && (
                <div className={s.levelItem}>
                  <div className={s.center}>
                    <div className={s.cardTitle}>Профессионал</div>
                    <div className={s.price}>{displayPrice({ value: seniorSalary })}</div>
                    <div className={s.stars}>
                      <div className={cn(s.starItem, s.active)}>
                        <StarIcon />
                      </div>
                      <div className={cn(s.starItem, s.active)}>
                        <StarIcon />
                      </div>
                      <div className={cn(s.starItem, s.active)}>
                        <StarIcon />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Vacancy };
