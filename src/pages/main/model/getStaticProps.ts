import { GetStaticProps } from "next";
import { topPageService } from "@/src/entity/topPage/api";
import { MainProps } from "./mainProps";
import { LevelCategoryEnum } from "@/src/shared/model";

export const getMainStaticProps: GetStaticProps<MainProps> = async () => {
  const category = LevelCategoryEnum.Courses;
  try {
    const res = await topPageService.postNavigation({ category });
    const menu = res.data;
    return {
      props: {
        menu,
        category,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        menu: [],
        category,
      },
    };
  }
};
