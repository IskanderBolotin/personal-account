import { GetStaticProps, GetStaticPropsContext } from "next";
import { topPageService } from "@/src/entity/topPage/api";
import { CourseProps } from "./courseProps";
import { isDefined } from "@/src/shared/libs";
import { productService } from "@/src/entity/product/api";

export const getCourseStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!isDefined(params)) {
    return {
      notFound: true,
    };
  }

  const category = 0;
  const { alias } = params;

  try {
    const { data: menu } = await topPageService.postNavigation({ category });
    const { data: page } = await topPageService.getPageByAlias({ alias });
    const { data: products } = await productService.postProduct({
      category: page.category,
      limit: 10,
    });

    return {
      props: {
        menu,
        category,
        page,
        products,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
