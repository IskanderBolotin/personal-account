import { PropsWithChildren } from "react";
import s from "./mainLayout.module.scss";
import { AppFooter, AppNavigation } from "../../ui";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.layout}>
      <div className="container">
        <div className={s.content}>
          <div className={s.sidebar}>
            <AppNavigation />
          </div>
          <main className={s.main}>{children}</main>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export { MainLayout };
