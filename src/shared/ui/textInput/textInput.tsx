import { ChangeEvent, ComponentProps, useState } from "react";
import { isDefinedFn } from "../../libs";
import s from "./textInput.module.scss";
import cn from "classnames";

type OwnProps = {
  value?: string;
  onChange?: (value: string) => void;
};

export type TextInputProps = OwnProps &
  Omit<ComponentProps<"input">, keyof OwnProps | "defaultValue">;

const TextInput: React.FC<TextInputProps> = ({
  value = "",
  onChange,
  className,
  ...otherProps
}) => {
  const [inputValue, setInputValue] = useState(value);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (isDefinedFn(onChange)) {
      onChange(e.target.value);
    }
  };

  return (
    <input
      className={cn(s.input, className)}
      value={inputValue}
      onChange={changeHandler}
      {...otherProps}
    />
  );
};

export { TextInput };
