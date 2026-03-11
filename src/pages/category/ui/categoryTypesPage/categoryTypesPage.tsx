import { withMainLayout } from "@/src/widget/layouts/ui";
import { CategoryTypesProps } from "../../model";
import { CategoryTitle } from "@/src/shared/ui";
import { mainNavigationConfig } from "@/src/entity/topPage/config";

const CategoryTypesPage: React.FC<CategoryTypesProps> = ({ menu, category }) => {
  return (
    <>
      <CategoryTitle
        title={mainNavigationConfig.find((item) => item.id === category)?.title ?? ""}
      />
    </>
  );
};

const CategoryTypesPageWithLayout = withMainLayout(CategoryTypesPage);

export { CategoryTypesPageWithLayout };
