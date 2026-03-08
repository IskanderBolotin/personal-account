import { withMainLayout } from "@/src/widget/layouts/ui";
import { CategoryAliasProps } from "../../model";
import s from "./categoryAliasPage.module.scss";
import { CategoryTitle } from "@/src/shared/ui";
import { Advantages, Skills, Vacancy } from "@/src/widget/categories/ui";
import { isDefined, isDefinedArray } from "@/src/shared/libs";
import { ProductSort } from "@/src/entity/product/ui";
import { useReducer } from "react";
import { sortReducer } from "@/src/entity/product/model";

const CategoryAliasPage: React.FC<CategoryAliasProps> = ({ menu, page, category, products }) => {
  const [{ products: sortedProducts, sort }, dispatch] = useReducer(sortReducer, { products });

  return (
    <>
      <div className={s.topTitle}>
        <CategoryTitle title={page.title} tagTitle={products?.length} />
        <ProductSort />
      </div>
      {products.map((item) => (
        <div>{item.title}</div>
      ))}
      {isDefined(page.hh) && (
        <Vacancy title={page.category} {...page.hh} wrapperClassName={s.section} />
      )}
      {isDefinedArray(page.advantages) && (
        <Advantages data={page.advantages} wrapperClassName={s.section} seoText={page.seoText} />
      )}
      {isDefinedArray(page.tags) && (
        <Skills title={page.tagsTitle} data={page.tags} wrapperClassName={s.section} />
      )}
    </>
  );
};

const CategoryAliasPageWithLayout = withMainLayout(CategoryAliasPage);

export { CategoryAliasPageWithLayout };
