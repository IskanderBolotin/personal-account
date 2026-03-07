import { withMainLayout } from "@/src/widget/layouts/ui";
import { CategoryTypesProps } from "../../model";

const CategoryTypesPage: React.FC<CategoryTypesProps> = ({ menu, category }) => {
  return <>Категория: {category}</>;
};

const CategoryTypesPageWithLayout = withMainLayout(CategoryTypesPage);

export { CategoryTypesPageWithLayout };
