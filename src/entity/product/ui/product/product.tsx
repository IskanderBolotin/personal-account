import { Card, CustomButton, Paragraph, Raiting, Tag, Title } from "@/src/shared/ui";
import { ProductDto } from "../../model";
import s from "./product.module.scss";
import {
  declineWordAfterNumber,
  displayPrice,
  isDefined,
  isDefinedArray,
  isDefinedNumber,
  isDefinedString,
} from "@/src/shared/libs";
import cn from "classnames";
import Image from "next/image";

type Props = {
  data: ProductDto;
};

const Product: React.FC<Props> = ({ data }) => {
  const {
    title,
    image,
    price,
    oldPrice,
    credit,
    reviewAvg,
    categories,
    reviewCount,
    description,
    advantages,
    disadvantages,
    characteristics,
    tags,
  } = data;

  return (
    <Card>
      <div className={s.header}>
        <div className={s.headerItem}>
          <div className={s.left}>
            <div className={s.image}>
              <Image src={`${image}`} alt={title} width={70} height={70} quality={100} />
            </div>
            <div>
              <div className={s.title}>
                <Title as="h3" level={3} className={s.mainTitle}>
                  {title}
                </Title>
              </div>
              {isDefinedArray(categories) && (
                <div className={s.categories}>
                  {categories.map((category) => (
                    <div className={s.category} key={category}>
                      <Tag type="default">{category}</Tag>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className={s.headerItem}>
          <div className={s.right}>
            <div className={s.rightItem}>
              <div className={s.rightMain}>
                <div>
                  <span className={s.price}>{displayPrice({ value: price })}</span>{" "}
                  {isDefined(oldPrice) && (
                    <Tag type="green" className={s.oldPrice}>
                      -{displayPrice({ value: price - oldPrice })}
                    </Tag>
                  )}
                </div>
              </div>
              <div className={s.rightSub}>цена</div>
            </div>
            <div className={s.rightItem}>
              <div className={s.rightMain}>
                <span className={s.price}>
                  {displayPrice({ value: credit })}
                  <span className={s.sub}>/мес</span>
                </span>
              </div>
              <div className={s.rightSub}>в кредит</div>
            </div>
            <div className={s.rightItem}>
              <div className={s.rightMain}>
                <Raiting defaultValue={isDefinedNumber(reviewAvg) ? reviewAvg : 0} isNotEditable />
              </div>
              <div className={s.rightSub}>
                {declineWordAfterNumber(reviewCount, ["отзыв", "отзыва", "отзывов"])}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={s.body}>
        {isDefinedString(description) && (
          <Paragraph size="m" className={s.description}>
            {description}
          </Paragraph>
        )}
        <div className={s.info}>
          <div className={cn(s.infoItem, s.infoLeft)}>
            {isDefinedArray(characteristics) && (
              <ul className={s.characteristics}>
                {characteristics.map((item, index) => {
                  const { value, name } = item;
                  return (
                    <li className={s.charItem} key={index}>
                      <span className={s.property}>{name}</span>
                      <span className={s.dotted}></span>
                      <span className={s.value}>{value}</span>
                    </li>
                  );
                })}
              </ul>
            )}
            {isDefinedArray(tags) && (
              <div className={s.categories}>
                {tags.map((tag) => (
                  <div className={s.category} key={tag}>
                    <Tag type="default">{tag}</Tag>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={cn(s.infoItem, s.infoRight)}>
            {isDefinedString(advantages) && (
              <div className={s.advantages}>
                <span className={s.property}>Преимущества</span>
                <span className={s.value}>{advantages}</span>
              </div>
            )}
            <div className={cn(s.advantages, s.dis)}>
              <span className={s.property}>Недостатки</span>
              <span className={s.value}>{disadvantages ?? "Какие-то недостки"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className={s.footer}>
        <div className={s.btns}>
          <div className={s.btn}>
            <CustomButton appearance="primary">Узнать подробнее</CustomButton>
          </div>
          <div className={s.btn}>
            <CustomButton appearance="ghost" arrow="right">
              Читать отзывы
            </CustomButton>
          </div>
        </div>
      </div>
    </Card>
  );
};

export { Product };
