import { topPageService } from "@/src/entity/topPage/api";
import { LevelCategoryEnum } from "@/src/shared/model";
import { GetStaticPaths } from "next";

export const getCourseStaticPaths: GetStaticPaths = async () => {
  const category = LevelCategoryEnum.Courses;

  try {
    const { data: menu } = await topPageService.postNavigation({ category });
    return {
      paths: menu.flatMap((menuItem) =>
        menuItem.pages.map((page) => {
          return {
            params: {
              alias: page.alias,
            },
          };
        }),
      ),
      fallback: true,
    };
  } catch (e) {
    console.log(e);
    return {
      paths: [],
      fallback: true,
    };
  }
};
