import { ReactNode } from "react";
import s from "./mainLayout.module.scss";
import { AppFooter, MainLogo } from "@/src/shared/ui";
import { Search } from "@/src/feature/mainSearch/ui";

type Props = {
  mainContent?: ReactNode;
  sidebarContent?: ReactNode;
};

const MainLayout: React.FC<Props> = ({ mainContent, sidebarContent }) => {
  return (
    <div className={s.layout}>
      <div className="container">
        <div className={s.content}>
          <div className={s.sidebar}>
            <div className={s.logo}>
              <MainLogo />
            </div>
            <div className={s.search}>
              <Search />
            </div>
            {sidebarContent}
          </div>
          <main className={s.main}>{mainContent}</main>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export { MainLayout };
