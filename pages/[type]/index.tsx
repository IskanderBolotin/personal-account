import { CategoryTypesProps } from "@/src/pages/category/model";
import { getStaticPaths, getStaticProps } from "@/src/pages/category/model/getTypesPageFn";
import { CategoryTypesPageWithLayout } from "@/src/pages/category/ui";

const CategoryTypes: React.FC<CategoryTypesProps> = ({ menu, category }) => {
  return <CategoryTypesPageWithLayout menu={menu} category={category} />;
};
export { getStaticProps };
export { getStaticPaths };

export default CategoryTypes;
