import { CategoryTitle, Paragraph } from "@/src/shared/ui";
import s from "./advantages.module.scss";
import { AdvantageType } from "@/src/entity/topPage/model";
import CheckIcon from "./images/check.svg";
import { isDefinedString } from "@/src/shared/libs";

type Props = {
  data: AdvantageType[];
  seoText?: string;
  wrapperClassName?: string;
};

const Advantages: React.FC<Props> = ({ data, seoText, wrapperClassName }) => {
  return (
    <section className={wrapperClassName}>
      <div className={s.title}>
        <CategoryTitle title="Преимущества" titleAs="h2" titleLevel={2} />
      </div>
      <ul className={s.list}>
        {data?.map((advItem) => {
          const { title, _id, description } = advItem;
          return (
            <li className={s.item} key={_id}>
              {isDefinedString(title) && (
                <div className={s.top}>
                  <span className={s.icon}>
                    <CheckIcon />
                  </span>
                  <span className={s.name}>{title}</span>
                </div>
              )}
              {isDefinedString(description) && <p className={s.description}>{description}</p>}
            </li>
          );
        })}
      </ul>
      {isDefinedString(seoText) && (
        <Paragraph size="l" className={s.seoText}>
          <span dangerouslySetInnerHTML={{ __html: seoText }}></span>
        </Paragraph>
      )}
    </section>
  );
};

export { Advantages };
