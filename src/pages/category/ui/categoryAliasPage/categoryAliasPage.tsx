import { withMainLayout } from "@/src/widget/layouts/ui";
import { CategoryAliasProps } from "../../model";
import s from "./categoryAliasPage.module.scss";
import { CategoryTitle } from "@/src/shared/ui";
import { Advantages, ProductWithReview, Skills, Vacancy } from "@/src/widget/categories/ui";
import { isDefined, isDefinedArray, isDefinedString } from "@/src/shared/libs";
import { ProductSort } from "@/src/entity/product/ui";
import { useEffect, useReducer } from "react";
import { SortEnum, sortReducer } from "@/src/entity/product/model";
import { SortType } from "@/src/shared/ui/sortButton/sortType";
import Head from "next/head";

const CategoryAliasPage: React.FC<CategoryAliasProps> = ({ page, products }) => {
  const [{ products: sortedProducts }, dispatch] = useReducer(sortReducer, { products });

  const { metaTitle, metaDescription } = page;

  useEffect(() => {
    dispatch({ type: "RESET", payload: products });
  }, [products]);

  const onClickRaitingSort = (sort: SortType | undefined) => {
    if (sort === "asc") {
      dispatch({ type: SortEnum.RAITING_ASC });
      return;
    }

    if (sort === "desc") {
      dispatch({ type: SortEnum.RAITING_DESC });
      return;
    }

    dispatch({ type: "RESET", payload: products });
    return;
  };

  const onClickPriceSort = (sort: SortType | undefined) => {
    if (sort === "asc") {
      dispatch({ type: SortEnum.PRICE_ASC });
      return;
    }

    if (sort === "desc") {
      dispatch({ type: SortEnum.PRICE_DESC });
      return;
    }

    dispatch({ type: "RESET", payload: products });
    return;
  };

  return (
    <>
      <Head>
        {isDefinedString(metaTitle) && <title>{metaTitle}</title>}
        {isDefinedString(metaDescription) && <meta name="description" content={metaDescription} />}
      </Head>
      <div className={s.topTitle}>
        <div className={s.topItem}>
          <CategoryTitle title={page.title} tagTitle={products?.length} />
        </div>
        <div className={s.topItem} key={`${page._id}-sort`}>
          <ProductSort
            onClickRaitingSort={onClickRaitingSort}
            onClickPriceSort={onClickPriceSort}
          />
        </div>
      </div>
      <section className="pageSection">
        {sortedProducts.map((product) => (
          <div style={{ marginBottom: "10px" }} key={product._id}>
            <ProductWithReview product={product} />
          </div>
        ))}
      </section>
      {isDefined(page.hh) && (
        <Vacancy title={page.category} {...page.hh} wrapperClassName="pageSection" />
      )}
      {isDefinedArray(page.advantages) && (
        <Advantages data={page.advantages} wrapperClassName="pageSection" seoText={page.seoText} />
      )}
      {isDefinedArray(page.tags) && <Skills title={page.tagsTitle} data={page.tags} />}
    </>
  );
};

const CategoryAliasPageWithLayout = withMainLayout(CategoryAliasPage);

export { CategoryAliasPageWithLayout };
