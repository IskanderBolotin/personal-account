import cn from "classnames";
import s from "./reviewForm.module.scss";
import { CustomButton, ErrorMessage, Raiting, TextArea, TextInput } from "@/src/shared/ui";
import { SuccessMessage } from "../successMessage";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ReviewFormModel, ReviewFormNameType } from "../../model";
import { reviewService } from "../../api";
import { isDefinedString } from "@/src/shared/libs";

type Props = {
  productId: string;
};

const ReviewForm: React.FC<Props> = ({ productId }) => {
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const methods = useForm<ReviewFormModel>();

  const { control, handleSubmit, reset } = methods;

  const closeHanlder = () => {
    setIsSuccess(false);
  };

  const formSubmitHandler = async (data: ReviewFormModel) => {
    try {
      await reviewService.postCreateDemo({ ...data, productId });
      setIsSuccess(true);
      reset();
    } catch (e) {
      setError("Ошибка");
      setIsSuccess(false);
    }
  };

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit(formSubmitHandler)}>
        <div className={s.form}>
          <div className={cn(s.item, s.field)}>
            <Controller
              control={control}
              name={ReviewFormNameType.name}
              rules={{ required: "Заполните обязательное поле" }}
              render={({ field, fieldState }) => {
                const { onChange, value, name, ref } = field;
                const { error } = fieldState;

                return (
                  <TextInput
                    placeholder="Имя"
                    name={name}
                    onChange={onChange}
                    onBlur={(e) => onChange(e.target.value.trim())}
                    value={value}
                    textInputRef={ref}
                    error={error?.message}
                  />
                );
              }}
            />
          </div>
          <div className={cn(s.item, s.field)}>
            <Controller
              control={control}
              name={ReviewFormNameType.title}
              rules={{ required: "Обязательное поле" }}
              render={({ field, fieldState }) => {
                const { onChange, value, name, ref } = field;
                const { error } = fieldState;

                return (
                  <TextInput
                    placeholder="Заголовок отзыва"
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={(e) => onChange(e.target.value.trim())}
                    textInputRef={ref}
                    error={error?.message}
                  />
                );
              }}
            />
          </div>
          <div className={cn(s.item, s.itemRaiting)}>
            <div className={s.raiting}>
              <div className={s.raitngItem}>Оценка:</div>
              <div className={s.raitngItem}>
                <Controller
                  control={control}
                  name={ReviewFormNameType.rating}
                  rules={{ required: "Обязательное поле" }}
                  render={({ field, fieldState }) => {
                    const { onChange, value, name, ref } = field;
                    const { error } = fieldState;

                    return (
                      <Raiting
                        name={name}
                        defaultValue={value}
                        uniqKey={productId}
                        onChangeHandler={onChange}
                        raitingRef={ref}
                        error={error?.message}
                      />
                    );
                  }}
                />
              </div>
            </div>
          </div>
          <div className={cn(s.item, s.fullWidth)}>
            <Controller
              control={control}
              rules={{ required: "Заполните обязательное поле" }}
              name={ReviewFormNameType.description}
              render={({ field, fieldState }) => {
                const { onChange, value, name, ref } = field;
                const { error } = fieldState;

                return (
                  <TextArea
                    value={value}
                    placeholder="Текст отзыва"
                    name={name}
                    onChange={onChange}
                    onBlur={(e) => onChange(e.target.value.trim())}
                    textAreaRef={ref}
                    error={error?.message}
                  />
                );
              }}
            />
          </div>
          <div className={cn(s.item, s.fullWidth)}>
            <CustomButton appearance="primary" type="submit" className={s.button}>
              Отправить
            </CustomButton>{" "}
            <p className={s.text}>
              * Перед публикацией отзыв пройдет предварительную модерацию и проверку
            </p>
          </div>
        </div>
      </form>
      {isSuccess && (
        <div className={s.marginTop}>
          <SuccessMessage closeHandler={closeHanlder} />
        </div>
      )}
      {isDefinedString(error) && (
        <div className={s.marginTop}>
          <ErrorMessage message={error} isBig />
        </div>
      )}
    </div>
  );
};

export { ReviewForm };
