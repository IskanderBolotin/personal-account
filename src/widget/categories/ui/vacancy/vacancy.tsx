import { HHDataType } from "@/src/entity/topPage/model";
import { CategoryTitle } from "@/src/shared/ui";
import StarIcon from "./images/star.svg";
import cn from "classnames";
import s from "./vacancy.module.scss";

type Props = {
  title: string;
} & Partial<HHDataType>;

const Vacancy: React.FC<Props> = ({ title, count, juniorSalary, middleSalary, seniorSalary }) => {
  return (
    <section>
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
        <div className={s.item}>
          <div className={s.card}>
            <div className={s.center}>
              <div className={s.cardTitle}>Всего вакансий</div>
              <div className={s.count}>{count}</div>
            </div>
          </div>
        </div>
        <div className={cn(s.item, s.itemFull)}>
          <div className={s.card}>
            <div className={s.levels}>
              <div className={s.levelItem}>
                <div className={s.center}>
                  <div className={s.cardTitle}>Начальный</div>
                  <div className={s.price}>{juniorSalary}</div>
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
              <div className={s.levelItem}>
                <div className={s.center}>
                  <div className={s.cardTitle}>Средний</div>
                  <div className={s.price}>{middleSalary}</div>
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
              <div className={s.levelItem}>
                <div className={s.center}>
                  <div className={s.cardTitle}>Профессионал</div>
                  <div className={s.price}>{seniorSalary}</div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Vacancy };
