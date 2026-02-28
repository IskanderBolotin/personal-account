import { LevelCategoryEnum } from "@/src/shared/model";
import { NavigationModel } from "../model";
import CoursIcon from "../images/course.svg";
import ServiceIcon from "../images/service.svg";
import BookIcon from "../images/book.svg";
import ProductIcon from "../images/product.svg";

export const mainNavigationConfig: NavigationModel[] = [
  {
    id: LevelCategoryEnum.Courses,
    key: "courses",
    title: "Курсы",
    isOpen: true,
    icon: <CoursIcon />,
  },
  {
    id: LevelCategoryEnum.Services,
    key: "services",
    title: "Сервисы",
    isOpen: false,
    icon: <ServiceIcon />,
  },
  {
    id: LevelCategoryEnum.Books,
    key: "books",
    title: "Книги",
    isOpen: false,
    icon: <BookIcon />,
  },
  {
    id: LevelCategoryEnum.Products,
    key: "products",
    title: "Товары",
    isOpen: false,
    icon: <ProductIcon />,
  },
];
