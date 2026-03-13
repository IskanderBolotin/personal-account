import cn from "classnames";
import s from "./errorMessage.module.scss";

type Props = {
  message: string;
  isBig?: boolean;
};

const ErrorMessage: React.FC<Props> = ({ message, isBig = false }) => {
  return <span className={cn(s.error, isBig && s.big)}>{message}</span>;
};

export { ErrorMessage };
