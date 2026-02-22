import { Fragment, InputHTMLAttributes, useState } from "react";
import cn from "classnames";
import Star from "./images/star.svg";
import s from "./raiting.module.scss";
import { RaitnigValuesType } from "./raitnigTypes";
import { isDefinedFn } from "../../libs";
import { HtmlElementPropsType } from "../../model";

const starValues = [
  { label: "", id: "0" },
  { label: "Ужасно", id: "1" },
  { label: "Плохо", id: "2" },
  { label: "Нормально", id: "3" },
  { label: "Хорошо", id: "4" },
  { label: "Отлично", id: "5" },
] as const;

type Props = {
  defaultValue?: RaitnigValuesType;
  isNotEditable?: boolean;
  onChangeHandler?: (checkedId: RaitnigValuesType) => void;
} & HtmlElementPropsType<HTMLDivElement>;

const Raiting: React.FC<Props> = ({
  defaultValue = "0",
  isNotEditable = false,
  onChangeHandler,
  ...divProps
}) => {
  const [checkedId, setCheckedId] = useState(defaultValue);

  const inputHandler = (currentId: RaitnigValuesType) => {
    setCheckedId(currentId);
    if (isDefinedFn(onChangeHandler)) {
      onChangeHandler(currentId);
    }
    setCheckedId(currentId);
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

  return (
    <div {...divProps} className={cn(s.raiting, isNotEditable && s.notEditable)}>
      {starValues.map((star) => {
        const { label, id } = star;
        return (
          <Fragment key={id}>
            <input
              type="radio"
              id={id}
              name="raiting"
              className={cn(s.input, "visually-hidden")}
              tabIndex={-1}
              {...setInputChandeHandler(id)}
            />
            <label
              aria-label={label}
              className={cn(s.label, id === "0" && "visually-hidden")}
              htmlFor={id}
              tabIndex={id === "0" ? -1 : 0}
            >
              <Star />
            </label>
          </Fragment>
        );
      })}
    </div>
  );
};

export { Raiting };
