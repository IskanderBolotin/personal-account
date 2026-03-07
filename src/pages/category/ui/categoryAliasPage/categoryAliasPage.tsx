import { withMainLayout } from "@/src/widget/layouts/ui";
import { CategoryAliasProps } from "../../model";
import s from "./categoryAliasPage.module.scss";
import { CategoryTitle, SortButton } from "@/src/shared/ui";
import { Vacancy } from "@/src/widget/categories/ui";

const CategoryAliasPage: React.FC<CategoryAliasProps> = ({ menu, page, category, products }) => {
  return (
    <>
      <div>
        <CategoryTitle title={page.title} tagTitle={products?.length} />
        <SortButton title="По рейтингу " />
      </div>
      <Vacancy title={page.category} {...page.hh} />
    </>
  );
};

const CategoryAliasPageWithLayout = withMainLayout(CategoryAliasPage);

export { CategoryAliasPageWithLayout };
