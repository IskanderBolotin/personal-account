import Link from "next/link";
import { mainNavigationConfig } from "../../config";
import s from "./firstLevelNavigation.module.scss";

const FirstLevelNavigation: React.FC = () => {
  return (
    <ul className={s.list}>
      {mainNavigationConfig?.map((mainItem) => {
        const { title, icon, key } = mainItem;

        return (
          <li className={s.item} key={key}>
            <Link href={`/${key}`} className={s.link}>
              <span className={s.title}>
                <span className={s.icon}>{icon}</span>
                {title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export { FirstLevelNavigation };
