import { ChangeEvent, ComponentProps, useState } from "react";
import s from "./textArea.module.scss";
import { isDefinedFn, isDefinedString } from "../../libs";
import cn from "classnames";
import { RefCallBack } from "react-hook-form";
import { ErrorMessage } from "../errorMessage";

type OwnProps = {
  value?: string;
  error?: string;
  textAreaRef?: RefCallBack;
  onChange?: (value?: string) => void;
};

type Props = OwnProps & Omit<ComponentProps<"textarea">, keyof OwnProps>;

const TextArea: React.FC<Props> = ({
  value = "",
  onChange,
  error,
  textAreaRef,
  className,
  ...otherProps
}) => {
  const isError = isDefinedString(error);

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (isDefinedFn(onChange)) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={s.field}>
      <textarea
        className={cn(s.textArea, className, isError && s.error)}
        onChange={changeHandler}
        {...otherProps}
        ref={textAreaRef}
        value={value}
      />
      {isError && (
        <div className={s.errorMessage}>
          <ErrorMessage message={error} />
        </div>
      )}
    </div>
  );
};

export { TextArea };
