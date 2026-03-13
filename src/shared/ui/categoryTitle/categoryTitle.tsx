import { Fragment } from "react/jsx-runtime";
import { isDefined } from "../../libs";
import { Tag } from "../tag";
import { TagType } from "../tag/tagType";
import { Title } from "../title";
import s from "./categoryTitle.module.scss";

type Props = {
  title: string;
  titleLevel?: 1 | 2 | 3;
  tagTitle?: number | string;
  tagType?: TagType;
  titleAs?: React.ElementType;
};

const CategoryTitle: React.FC<Props> = ({
  title,
  tagTitle,
  titleLevel = 1,
  tagType = "common",
  titleAs = "h1",
}) => {
  const titleWords = title.split(" ");

  return (
    <div className={s.title}>
      <div className={s.item}>
        <Title level={titleLevel} as={titleAs}>
          {titleWords?.map((titleItem, index) => {
            if (index === titleWords.length - 1) {
              return (
                <span className={s.lastElemnt} key={index}>
                  {titleItem}{" "}
                  {isDefined(tagTitle) && (
                    <Tag type={tagType} className={s.tag}>
                      {tagTitle}
                    </Tag>
                  )}
                </span>
              );
            }
            return (
              <Fragment key={index}>
                <span>{titleItem}</span>{" "}
              </Fragment>
            );
          })}
        </Title>
        {}
      </div>
    </div>
  );
};

export { CategoryTitle };
