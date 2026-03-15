import { withMainLayout } from "@/src/widget/layouts/ui";
import { CategoryTypesProps } from "../../model";
import { CategoryTitle } from "@/src/shared/ui";
import { mainNavigationConfig } from "@/src/entity/topPage/config";
import { LastLevelNavigation } from "@/src/entity/topPage/ui";
import s from "./categoryTypesPage.module.scss";

const CategoryTypesPage: React.FC<CategoryTypesProps> = ({ menu, category }) => {
  return (
    <>
      <div className={s.title}>
        <CategoryTitle
          title={mainNavigationConfig.find((item) => item.id === category)?.title ?? ""}
        />
      </div>
      <LastLevelNavigation menu={menu} category={category} />
    </>
  );
};

const CategoryTypesPageWithLayout = withMainLayout(CategoryTypesPage);

export { CategoryTypesPageWithLayout };
