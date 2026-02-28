import Link from "next/link";
import Logo from "./images/logo.svg";
import s from "./mainLogo.module.scss";

const MainLogo: React.FC = () => {
  return (
    <div className={s.logo}>
      <Link href={"/"}>
        <Logo />
      </Link>
    </div>
  );
};

export { MainLogo };
