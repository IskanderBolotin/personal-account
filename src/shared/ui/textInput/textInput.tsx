import { ChangeEvent, ComponentProps, useEffect, useState } from "react";
import { isDefinedFn, isDefinedString } from "../../libs";
import s from "./textInput.module.scss";
import cn from "classnames";
import { RefCallBack } from "react-hook-form";
import { ErrorMessage } from "../errorMessage";

type OwnProps = {
  value?: string;
  error?: string;
  textInputRef?: RefCallBack;
  onChange?: (value: string) => void;
};

export type TextInputProps = OwnProps &
  Omit<ComponentProps<"input">, keyof OwnProps | "defaultValue">;

const TextInput: React.FC<TextInputProps> = ({
  value = "",
  error,
  textInputRef,
  onChange,
  className,
  ...otherProps
}) => {
  const isError = isDefinedString(error);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (isDefinedFn(onChange)) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={s.field}>
      <input
        className={cn(s.input, className, isError && s.error)}
        value={value}
        onChange={changeHandler}
        {...otherProps}
        ref={textInputRef}
      />
      {isError && (
        <div className={s.errorMessage}>
          <ErrorMessage message={error} />
        </div>
      )}
    </div>
  );
};

export { TextInput };
