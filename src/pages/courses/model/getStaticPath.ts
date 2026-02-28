import { topPageService } from "@/src/entity/topPage/api";
import { GetStaticPaths } from "next";

export const getCourseStaticPaths: GetStaticPaths = async () => {
  const category = 0;

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
