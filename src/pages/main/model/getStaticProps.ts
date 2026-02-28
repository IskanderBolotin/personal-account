import { GetStaticProps } from "next";
import { topPageService } from "@/src/entity/topPage/api";
import { MainProps } from "./mainProps";

export const getMainStaticProps: GetStaticProps<MainProps> = async () => {
  const category = 0;
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
