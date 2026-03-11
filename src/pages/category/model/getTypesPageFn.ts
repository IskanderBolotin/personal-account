import { topPageService } from "@/src/entity/topPage/api";
import { mainNavigationConfig } from "@/src/entity/topPage/config";
import { GetStaticPaths } from "next";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { isDefined } from "@/src/shared/libs";
import { CategoryTypesProps } from "./categoryTypesProps";

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    return {
      paths: mainNavigationConfig.map((item) => {
        return {
          params: {
            type: item.key,
          },
        };
      }),
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

export const getStaticProps: GetStaticProps<CategoryTypesProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!isDefined(params)) {
    return {
      notFound: true,
    };
  }

  const { type } = params;
  const currentCatgeory = mainNavigationConfig.find((category) => category.key === type);

  if (!isDefined(currentCatgeory)) {
    return {
      notFound: true,
    };
  }

  const category = currentCatgeory.id;

  try {
    const { data: menu } = await topPageService.postNavigation({ category });

    return {
      props: {
        menu,
        category,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      notFound: true,
    };
  }
};
