import CloseIcon from "./images/close.svg";
import s from "./successMessage.module.scss";

type Props = {
  closeHandler: () => void;
};

const SuccessMessage: React.FC<Props> = ({ closeHandler }) => {
  const clickHandler = () => {
    closeHandler();
  };
  return (
    <div className={s.success}>
      <button className={s.close} onClick={clickHandler}>
        <CloseIcon />
      </button>
      <div className={s.title}>Ваш отзыв отправлен</div>
      <div className={s.text}>Спасибо, ваш отзыв будет опублиокван после проверки.</div>
    </div>
  );
};

export { SuccessMessage };
