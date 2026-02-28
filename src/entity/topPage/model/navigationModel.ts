import { LevelCategoryEnum } from "@/src/shared/model";
import { ReactNode } from "react";

export type NavigationModel = {
  id: LevelCategoryEnum;
  title: string;
  icon: ReactNode;
  key: string;
};
