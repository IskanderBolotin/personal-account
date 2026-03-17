import cn from "classnames";
import s from "./appNavigation.module.scss";
import { CollapsableContent } from "@/src/shared/ui";
import { isDefined, isDefinedArray, isDefinedFn } from "@/src/shared/libs";
import { NavigationDto } from "../../model";
import Link from "next/link";
import { LevelCategoryEnum } from "@/src/shared/model";
import { mainNavigationConfig } from "../../config";
import { useRouter } from "next/router";

type Props = {
  menu?: NavigationDto[];
  category?: LevelCategoryEnum;
  navClassName?: string;
  linkHandler?: () => void;
};

const AppNavigation: React.FC<Props> = ({ menu, category, navClassName, linkHandler }) => {
  const { query } = useRouter();

  const currentAliasPath = isDefined(query.alias)
    ? typeof query.alias === "string"
      ? query.alias
      : query.alias[0]
    : "";

  const onLinkClick = () => {
    if (isDefinedFn(linkHandler)) {
      linkHandler();
    }
  };

  return (
    <nav className={cn(s.nav, navClassName)} role="navigation">
      <ul className={s.menu}>
        {mainNavigationConfig?.map((mainItem) => {
          const { id, title, icon, key } = mainItem;

          const isOpen = category === id;

          return (
            <li className={s.menuItem} key={key} aria-expanded={isOpen}>
              <Link href={`/${key}`} onClick={onLinkClick}>
                <span className={cn(s.mainTitle, s.title, isOpen && s.active)}>
                  <span className={s.icon}>{icon}</span>
                  {title}
                </span>
              </Link>

              {isOpen && isDefinedArray(menu) && (
                <ul className={s.subMenu}>
                  {menu.map((subMenuItem) => {
                    const { _id, pages } = subMenuItem;

                    const isOpen = pages.map((page) => page.alias).includes(currentAliasPath);

                    return (
                      <li className={s.subMenuItem} key={_id.secondCategory} aria-expanded={isOpen}>
                        {isDefinedArray(pages) && (
                          <CollapsableContent
                            triggerElement={
                              <span
                                className={cn(s.subTitle, s.title, isOpen && s.active)}
                                tabIndex={0}
                              >
                                {_id.secondCategory}
                              </span>
                            }
                            content={
                              <ul className={s.category}>
                                {pages.map((categoryItem) => {
                                  const { alias, title, _id } = categoryItem;

                                  const isOpen = alias === currentAliasPath;

                                  return (
                                    <li className={s.categoryItem} key={_id}>
                                      <Link
                                        className={cn(s.categoryTitle, s.title, isOpen && s.active)}
                                        href={`/${key}/${alias}`}
                                        onClick={onLinkClick}
                                        aria-current={isOpen ? "page" : false}
                                      >
                                        {title}
                                      </Link>
                                    </li>
                                  );
                                })}
                              </ul>
                            }
                            isOpen={isOpen}
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
