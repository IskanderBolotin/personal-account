import { CategoryTitle, Tag } from "@/src/shared/ui";
import s from "./skills.module.scss";

type Props = {
  title: string;
  data?: string[];
  wrapperClassName?: string;
};

const Skills: React.FC<Props> = ({ title, data, wrapperClassName }) => {
  return (
    <section className={wrapperClassName}>
      <div className={s.title}>
        <CategoryTitle title={title} titleAs="h2" titleLevel={2} />
      </div>
      <ul className={s.list}>
        {data?.map((item, index) => {
          return (
            <li className={s.item} key={index}>
              <Tag type="primary">{item}</Tag>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { Skills };
