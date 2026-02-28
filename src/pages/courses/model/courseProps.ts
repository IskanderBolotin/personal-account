import { ProductDto } from "@/src/entity/product/model";
import { NavigationDto, PageDto } from "@/src/entity/topPage/model";

export type CourseProps = {
  menu: NavigationDto[];
  page: PageDto;
  category: number;
  products: ProductDto[];
};
