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
  return (
    <div className={s.title}>
      <div className={s.item}>
        <Title level={titleLevel} as={titleAs}>
          {title}
        </Title>
      </div>
      <div className={s.item}>{isDefined(tagTitle) && <Tag type={tagType}>{tagTitle}</Tag>}</div>
    </div>
  );
};

export { CategoryTitle };
