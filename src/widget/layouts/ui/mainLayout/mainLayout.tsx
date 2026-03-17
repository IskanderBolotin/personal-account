import { ReactNode } from "react";
import s from "./mainLayout.module.scss";
import { AppFooter, AppHeader, MainLogo, UpButton } from "@/src/shared/ui";
import { Search } from "@/src/feature/mainSearch/ui";

type Props = {
  mainContent?: ReactNode;
  renderSidebar: (linkHandler: () => void) => ReactNode;
};

const MainLayout: React.FC<Props> = ({ mainContent, renderSidebar }) => {
  return (
    <>
      <div className={s.layout}>
        <div className="container">
          <div className={s.content}>
            <AppHeader
              renderMenu={(linkHandler) => {
                return (
                  <div className={s.sidebar}>
                    <div className={s.logo}>
                      <MainLogo />
                    </div>
                    <div className={s.search}>
                      <Search />
                    </div>
                    <div className={s.menu}>{renderSidebar(linkHandler)}</div>
                  </div>
                );
              }}
            ></AppHeader>
            <main className={s.main} role="main">
              {mainContent}
            </main>
          </div>
        </div>
        <AppFooter />
      </div>
      <UpButton />
    </>
  );
};

export { MainLayout };
