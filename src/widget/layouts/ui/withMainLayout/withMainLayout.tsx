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
        sidebarContent={
          <div className={s.nav}>
            <AppNavigation menu={menu} category={category} />
          </div>
        }
      />
    );
  };
};

export { withMainLayout };
