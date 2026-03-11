import cn from "classnames";
import s from "./reviewForm.module.scss";
import { CustomButton, Raiting, TextArea, TextInput } from "@/src/shared/ui";
import { SuccessMessage } from "../successMessage";
import { useState } from "react";

type Props = {
  productId: string;
};

const ReviewForm: React.FC<Props> = ({ productId }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const closeHanlder = () => {
    setIsSuccess(false);
  };

  return (
    <div className={s.wrapper}>
      {!isSuccess ? (
        <form>
          <div className={s.form}>
            <div className={s.item}>
              <TextInput placeholder="Имя" />
            </div>
            <div className={s.item}>
              <TextInput placeholder="Заголовок отзыва" />
            </div>
            <div className={cn(s.item, s.itemRaiting)}>
              <div className={s.raiting}>
                <div className={s.raitngItem}>Оценка:</div>
                <div className={s.raitngItem}>
                  <Raiting name={`raiting-${productId}`} />
                </div>
              </div>
            </div>
            <div className={cn(s.item, s.fullWidth)}>
              <TextArea placeholder="Текст отзыва" />
            </div>
            <div className={cn(s.item, s.fullWidth)}>
              <CustomButton
                appearance="primary"
                type="submit"
                className={s.button}
                onClick={() => setIsSuccess(true)}
              >
                Отправить
              </CustomButton>{" "}
              <p className={s.text}>
                * Перед публикацией отзыв пройдет предварительную модерацию и проверку
              </p>
            </div>
          </div>
        </form>
      ) : (
        <SuccessMessage closeHandler={closeHanlder} />
      )}
    </div>
  );
};

export { ReviewForm };
