import { useEffect, useState } from "react";
import { IconButton } from "../iconButton";
import UpIcon from "./images/up.svg";
import cn from "classnames";
import s from "./upButton.module.scss";

const UpButton: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const currentScroll = window.scrollY || window.pageYOffset;
      if (currentScroll >= document.documentElement.clientHeight) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn(s.up, isActive && s.active)}>
      <IconButton icon={UpIcon} onClick={scrollTop} size="m" />
    </div>
  );
};

export { UpButton };
