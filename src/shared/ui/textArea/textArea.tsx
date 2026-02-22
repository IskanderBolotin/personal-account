import { ChangeEvent, useState } from "react";
import s from "./textArea.module.scss";
import { isDefinedFn } from "../../libs";
import cn from "classnames";

type OwnProps = {
  value?: string;
  onChange?: (value?: string) => void;
};

type Props = OwnProps & Omit<React.ComponentProps<"textarea">, keyof OwnProps>;

const TextArea: React.FC<Props> = ({ value, onChange, className, ...otherProps }) => {
  const [inputValue, setInputValue] = useState(value);

  const changeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (isDefinedFn(onChange)) {
      onChange(e.target.value);
    }
  };

  return (
    <textarea
      className={cn(s.textArea, className)}
      value={inputValue}
      onChange={changeHandler}
      {...otherProps}
    />
  );
};

export { TextArea };
