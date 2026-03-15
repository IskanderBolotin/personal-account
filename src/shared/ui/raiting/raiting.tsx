import { Fragment, InputHTMLAttributes, KeyboardEvent, useEffect, useState } from "react";
import cn from "classnames";
import Star from "./images/star.svg";
import s from "./raiting.module.scss";
import { RaitnigValuesType } from "./raitnigTypes";
import { isDefinedFn, isDefinedString } from "../../libs";
import { HtmlElementPropsType } from "../../model";
import { RefCallBack } from "react-hook-form";
import { ErrorMessage } from "../errorMessage";

const starValues = [
  { label: "", id: 0 },
  { label: "Ужасно", id: 1 },
  { label: "Плохо", id: 2 },
  { label: "Нормально", id: 3 },
  { label: "Хорошо", id: 4 },
  { label: "Отлично", id: 5 },
] as const;

type Props = {
  name?: string;
  uniqKey?: string;
  error?: string;
  defaultValue?: RaitnigValuesType;
  isNotEditable?: boolean;
  raitingRef?: RefCallBack;
  onChangeHandler?: (checkedId: RaitnigValuesType) => void;
} & HtmlElementPropsType<HTMLDivElement>;

const Raiting: React.FC<Props> = ({
  name,
  uniqKey,
  error,
  defaultValue = 0,
  isNotEditable = false,
  raitingRef,
  onChangeHandler,
  ...divProps
}) => {
  const [checkedId, setCheckedId] = useState<number>(defaultValue);
  const isError = isDefinedString(error);

  useEffect(() => {
    if (defaultValue !== checkedId) {
      setCheckedId(defaultValue);
    }
  }, [defaultValue]);

  const inputHandler = (currentId: RaitnigValuesType) => {
    setCheckedId(currentId);
    if (isDefinedFn(onChangeHandler)) {
      onChangeHandler(currentId);
    }
  };

  const setInputChandeHandler = (currentId: RaitnigValuesType) => {
    let props: InputHTMLAttributes<HTMLInputElement> = {};

    if (!isNotEditable) {
      props = {
        ...props,
        checked: checkedId === currentId,
        onChange: () => inputHandler(currentId),
      };
    }

    if (isNotEditable) {
      props = {
        ...props,
        defaultChecked: checkedId === currentId,
        disabled: true,
      };
    }

    return props;
  };

  const setLabelRef = (currentId: RaitnigValuesType) => {
    let props: HtmlElementPropsType<HTMLLabelElement> = {};
    if (checkedId === 0 && currentId === 1) {
      props = {
        ...props,
        ref: raitingRef,
      };
    } else if (currentId === checkedId) {
      props = {
        ...props,
        ref: raitingRef,
      };
    }

    return props;
  };

  const labelKeyDownHandler = (e: KeyboardEvent, currentId: number) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      setCheckedId(currentId);
    }
  };

  return (
    <>
      <div
        {...divProps}
        className={cn(s.raiting, isNotEditable && s.notEditable, isError && s.error)}
      >
        {isError && (
          <div className={s.errorMessage}>
            <ErrorMessage message={error} />
          </div>
        )}
        {starValues.map((star) => {
          const { label, id } = star;
          return (
            <Fragment key={id}>
              <input
                type="radio"
                id={`${name}-${id}-${uniqKey ?? "key"}`}
                name={name}
                className={cn(s.input, "visually-hidden")}
                tabIndex={-1}
                {...setInputChandeHandler(id)}
              />
              <label
                aria-label={label}
                className={cn(s.label, id === 0 && "visually-hidden")}
                htmlFor={`${name}-${id}-${uniqKey ?? "key"}`}
                tabIndex={isNotEditable ? -1 : id === 0 ? -1 : 0}
                {...setLabelRef(id)}
                onKeyDown={(e) => labelKeyDownHandler(e, id)}
              >
                <Star />
              </label>
            </Fragment>
          );
        })}
      </div>
    </>
  );
};

export { Raiting };
