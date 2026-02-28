import { NavigationDto } from "@/src/entity/topPage/model";
import { LevelCategoryEnum } from "@/src/shared/model";

export type DefaultPageProps = {
  menu: NavigationDto[];
  category: LevelCategoryEnum;
};
