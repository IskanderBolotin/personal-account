import cn from "classnames";
import s from "./appFooter.module.scss";

const AppFooter: React.FC = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <ul className={s.list}>
          <div className={s.item}>
            <p className={s.text}>OwlTop © 2020 - 2021 Все права защищены</p>
          </div>
          <div className={cn(s.item, "margin-left-auto")}>
            <p className={s.text}>Пользовательское соглашение</p>
          </div>
          <div className={s.item}>
            <p className={s.text}>Политика конфиденциальности</p>
          </div>
        </ul>
      </div>
    </footer>
  );
};

export { AppFooter };
