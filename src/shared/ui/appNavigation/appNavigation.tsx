import cn from "classnames";
import s from "./appNavigation.module.scss";
import { isDefinedArray } from "../../libs";
import CoursIcon from "./images/course.svg";
import ServiceIcon from "./images/service.svg";
import BookIcon from "./images/book.svg";
import ProductIcon from "./images/product.svg";

type NavType = {
  id: number;
  key: string;
  title: string;
  isOpen?: boolean;
  link?: string;
  children?: NavType[];
};

const iconConfig: Record<string, any> = {
  courses: <CoursIcon />,
  services: <ServiceIcon />,
  books: <BookIcon />,
  products: <ProductIcon />,
};

const navData: NavType[] = [
  {
    id: 1,
    key: "courses",
    title: "Курсы",
    isOpen: true,
    children: [
      {
        id: 1,
        key: "design",
        title: "ДИЗАЙН",
        children: [
          {
            id: 1,
            key: "Photoshop",
            title: "Photoshop",
            link: "#",
          },
          {
            id: 2,
            key: "AfterEffect",
            title: "AfterEffect",
            link: "#",
          },
          {
            id: 3,
            key: "Illustrator",
            title: "Illustrator",
            link: "#",
          },
          {
            id: 4,
            key: "Figma",
            title: "Figma",
            link: "#",
          },
        ],
      },
      {
        id: 2,
        key: "development",
        title: "РАЗРАБОТКА",
      },
      {
        id: 3,
        key: "analytics",
        title: "АНАЛИТИКА",
      },
      {
        id: 4,
        key: "marketing",
        title: "МАРКЕТИНГ",
      },
    ],
  },
  {
    id: 2,
    key: "services",
    title: "Сервисы",
  },
  {
    id: 3,
    key: "books",
    title: "Книги",
  },
  {
    id: 4,
    key: "products",
    title: "Товары",
  },
];

const AppNavigation: React.FC = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.menu}>
        {navData.map((mainItem) => {
          const { key, title, children } = mainItem;
          return (
            <li className={s.menuItem} key={key}>
              <div className={cn(s.mainTitle, s.title)}>
                <span className={s.icon}>{iconConfig[key]}</span>
                {title}
              </div>
              {isDefinedArray(children) && (
                <ul className={s.subMenu}>
                  {children.map((subMenuItem) => {
                    const { key, title, link, children } = subMenuItem;
                    return (
                      <li className={s.subMenuItem} key={key}>
                        <div className={cn(s.subTitle, s.title)}>{title}</div>
                        {isDefinedArray(children) && (
                          <ul className={s.category}>
                            {children.map((categoryItem) => {
                              const { key, title, link } = categoryItem;
                              return (
                                <li className={s.categoryItem} key={key}>
                                  <div className={cn(s.categoryTitle, s.title)}>{title}</div>
                                </li>
                              );
                            })}
                          </ul>
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
