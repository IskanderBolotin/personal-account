import Link from "next/link";
import s from "./lastLevelNavigation.module.scss";
import { NavigationDto } from "../../model";
import { isDefinedArray } from "@/src/shared/libs";
import { LevelCategoryEnum } from "@/src/shared/model";
import { Title } from "@/src/shared/ui";
import { mainNavigationConfig } from "../../config";

type Props = {
  category?: LevelCategoryEnum;
  menu?: NavigationDto[];
};

const LastLevelNavigation: React.FC<Props> = ({ category, menu }) => {
  return (
    <ul className={s.menu}>
      {menu?.map((subMenuItem) => {
        const { _id, pages } = subMenuItem;

        return (
          <li className={s.menuItem} key={_id.secondCategory}>
            {isDefinedArray(pages) && (
              <>
                <Title level={3} as="h3" className={s.categoryTitle}>
                  {_id.secondCategory}
                </Title>
                <ul className={s.category}>
                  {pages.map((categoryItem) => {
                    const { alias, title, _id } = categoryItem;
                    return (
                      <li className={s.categoryItem} key={_id}>
                        <Link
                          className={s.title}
                          href={`/${mainNavigationConfig.find((nav) => nav.id === category)?.key}/${alias}`}
                        >
                          {title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export { LastLevelNavigation };
