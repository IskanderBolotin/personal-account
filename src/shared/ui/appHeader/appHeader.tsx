import cn from "classnames";
import s from "./appHeader.module.scss";
import { ReactNode, useState } from "react";
import { MainLogo } from "../mainLogo";
import { IconButton } from "../iconButton";
import MenuIcon from "./images/menu.svg";
import CloseIcon from "./images/close.svg";

type Props = {
  renderMenu: (linkHandler: () => void) => ReactNode;
};

const AppHeader: React.FC<Props> = ({ renderMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={s.header}>
        <MainLogo />
        <IconButton appearance="white" icon={MenuIcon} shadow onClick={() => setIsOpen(true)} />
      </header>
      <div className={cn(s.fixedmenu, isOpen && s.open)}>
        <div className={s.close}>
          <IconButton appearance="white" icon={CloseIcon} shadow onClick={() => setIsOpen(false)} />
        </div>
        {renderMenu(() => setIsOpen(false))}
      </div>
    </>
  );
};

export { AppHeader };
