import cn from "classnames";
import s from "./appNavigation.module.scss";
import { CollapsableContent } from "@/src/shared/ui";
import { isDefinedArray } from "@/src/shared/libs";
import { NavigationDto } from "../../model";
import Link from "next/link";
import { LevelCategoryEnum } from "@/src/shared/model";
import { mainNavigationConfig } from "../../config";

type Props = {
  menu: NavigationDto[];
  category: LevelCategoryEnum;
};

const AppNavigation: React.FC<Props> = ({ menu, category }) => {
  return (
    <nav className={s.nav}>
      <ul className={s.menu}>
        {mainNavigationConfig?.map((mainItem) => {
          const { id, title, icon, key } = mainItem;
          const isOpen = category === id;
          return (
            <li className={s.menuItem} key={key}>
              <Link href={`/${key}`}>
                <span className={cn(s.mainTitle, s.title)}>
                  <span className={s.icon}>{icon}</span>
                  {title}
                </span>
              </Link>
              {isOpen && isDefinedArray(menu) && (
                <ul className={s.subMenu}>
                  {menu.map((subMenuItem) => {
                    const { _id, pages } = subMenuItem;
                    return (
                      <li className={s.subMenuItem} key={_id.secondCategory}>
                        {isDefinedArray(pages) && (
                          <CollapsableContent
                            triggerElement={
                              <span className={cn(s.subTitle, s.title)}>{_id.secondCategory}</span>
                            }
                            content={
                              <ul className={s.category}>
                                {pages.map((categoryItem) => {
                                  const { alias, title, _id } = categoryItem;
                                  return (
                                    <li className={s.categoryItem} key={_id}>
                                      <Link
                                        className={cn(s.categoryTitle, s.title)}
                                        href={`/${key}/${alias}`}
                                      >
                                        {title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            }
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { AppNavigation };
