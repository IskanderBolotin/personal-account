import { CategoryAliasProps } from "@/src/pages/category/model";
import { getStaticProps, getStaticPaths } from "@/src/pages/category/model/getAliasPageFn";
import { CategoryAliasPageWithLayout } from "@/src/pages/category/ui";

const CategoryAlias: React.FC<CategoryAliasProps> = ({ menu, category, products, page }) => {
  return (
    <CategoryAliasPageWithLayout menu={menu} category={category} products={products} page={page} />
  );
};

export { getStaticProps };
export { getStaticPaths };

export default CategoryAlias;
