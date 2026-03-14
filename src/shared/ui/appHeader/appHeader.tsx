import cn from "classnames";
import s from "./appHeader.module.scss";
import { PropsWithChildren, useState } from "react";
import { MainLogo } from "../mainLogo";
import { IconButton } from "../iconButton";
import MenuIcon from "./images/menu.svg";
import CloseIcon from "./images/close.svg";

type Props = {};

const AppHeader: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className={s.header}>
        <MainLogo />
        <IconButton appearance="white" icon={MenuIcon} shadow />
      </header>
      <div className={cn(s.fixedmenu, isOpen && s.open)}>
        <div className={s.close}>
          <IconButton appearance="white" icon={CloseIcon} shadow />
        </div>
        {children}
      </div>
    </>
  );
};

export { AppHeader };
