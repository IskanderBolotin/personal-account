import { topPageService } from "@/src/entity/topPage/api";
import { mainNavigationConfig } from "@/src/entity/topPage/config";
import { GetStaticPaths } from "next";
import { GetStaticProps, GetStaticPropsContext } from "next";
import { CategoryAliasProps } from "./categoryAliasProps";
import { isDefined, isDefinedArray } from "@/src/shared/libs";
import { productService } from "@/src/entity/product/api";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: {
    params: Record<string, string>;
    locale?: string;
  }[] = [];
  try {
    for (const item of mainNavigationConfig) {
      const { data: menu } = await topPageService.postNavigation({ category: item.id });

      const paramItem = menu.flatMap((menuItem) =>
        menuItem.pages.map((page) => {
          return {
            params: {
              alias: page.alias,
              type: item.key,
            },
          };
        }),
      );

      paths.push(...paramItem);
    }
    return {
      paths,
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

export const getStaticProps: GetStaticProps<CategoryAliasProps> = async ({
  params,
}: GetStaticPropsContext) => {
  if (!isDefined(params)) {
    return {
      notFound: true,
    };
  }

  const { alias, type } = params;
  const currentCatgeory = mainNavigationConfig.find((category) => category.key === type);

  if (!isDefined(currentCatgeory)) {
    return {
      notFound: true,
    };
  }

  const category = currentCatgeory.id;

  try {
    const { data: menu } = await topPageService.postNavigation({ category });

    if (!isDefinedArray(menu)) {
      return {
        notFound: true,
      };
    }

    const { data: page } = await topPageService.getPageByAlias({ alias });

    if (!isDefined(page)) {
      return {
        notFound: true,
      };
    }

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
