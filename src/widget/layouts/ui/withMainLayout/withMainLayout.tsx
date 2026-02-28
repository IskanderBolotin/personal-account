import { AppNavigation } from "@/src/entity/topPage/ui";
import { MainLayout } from "../mainLayout";
import { DefaultPageProps } from "../../model";

const withMainLayout = <T extends Record<string, unknown> & DefaultPageProps>(
  Component: React.FC<T>,
) => {
  return function WrappedComponent(props: T) {
    const { menu, category } = props;
    return (
      <MainLayout
        mainContent={<Component {...props} />}
        sidebarContent={<AppNavigation menu={menu} category={category} />}
      />
    );
  };
};

export { withMainLayout };
