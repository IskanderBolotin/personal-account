import { CategoryTitle, Paragraph } from "@/src/shared/ui";
import s from "./advantages.module.scss";
import { AdvantageType } from "@/src/entity/topPage/model";
import CheckIcon from "./images/check.svg";
import { isDefinedString } from "@/src/shared/libs";
import { useEffect, useState } from "react";

type Props = {
  data?: AdvantageType[];
  seoText?: string;
  wrapperClassName?: string;
};

const Advantages: React.FC<Props> = ({ data, seoText, wrapperClassName }) => {
  const [safeHTML, setSafeHTML] = useState("");

  useEffect(() => {
    if (isDefinedString(seoText) && safeHTML !== seoText) {
      setSafeHTML(seoText);
    }
  }, [seoText]);

  return (
    <section className={wrapperClassName}>
      <div className={s.title}>
        <CategoryTitle title="Преимущества" titleAs="h2" titleLevel={2} />
      </div>
      <ul className={s.list}>
        {data?.map((advItem, index) => {
          const { title, description } = advItem;
          return (
            <li className={s.item} key={index}>
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
          <span dangerouslySetInnerHTML={{ __html: safeHTML }} suppressHydrationWarning></span>
        </Paragraph>
      )}
    </section>
  );
};

export { Advantages };
