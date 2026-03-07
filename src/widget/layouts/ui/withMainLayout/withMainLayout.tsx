import { AppNavigation } from "@/src/entity/topPage/ui";
import { MainLayout } from "../mainLayout";
import { DefaultPageProps } from "../../model";
import s from "./withMainLayout.module.scss";

const withMainLayout = <T extends Record<string, unknown> & DefaultPageProps>(
  Component: React.FC<T>,
) => {
  return function WrappedComponent(props: T) {
    const { menu, category } = props;
    return (
      <MainLayout
        mainContent={<Component {...props} />}
        sidebarContent={<AppNavigation menu={menu} category={category} navClassName={s.nav} />}
      />
    );
  };
};

export { withMainLayout };
