import { LevelCategory } from "@/src/shared/model";

export type SecondCategoryType = {
  secondCayegory: string;
};

export type PageItemType = {
  alias: string;
  title: string;
  _id: string;
  category: string;
};

export type AdvantageType = {
  _id: string;
  title: string;
  description: string;
};

export type HHDataType = {
  _id: string;
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
};

export type NavigationDto = {
  _id: SecondCategoryType;
  pages: PageItemType[];
};

export type PageDto = {
  tags: string[];
  _id: string;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  seoText: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  firstCategory: LevelCategory;
  advantages: AdvantageType[];
  createdAt: Date;
  updatedAt: Date;
  hh: HHDataType;
};
