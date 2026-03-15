import { KeyboardEvent, useState } from "react";
import { IconButton } from "../iconButton";
import { TextInput } from "../textInput";
import { TextInputProps } from "../textInput/textInput";
import IconSearch from "./images/search.svg";
import s from "./searchInput.module.scss";
import { isDefinedFn } from "../../libs";

type OwnProps = {
  onSearh?: (value?: string) => void;
};

type Props = OwnProps & Omit<TextInputProps, keyof OwnProps>;

const SearchInput: React.FC<Props> = ({
  onSearh,
  value = "",
  placeholder = "Поиск",
  onChange,
  onKeyDown,
  ...otherProps
}) => {
  const [searchValue, setSearchValue] = useState(value);

  const seacrchHandler = (value?: string) => {
    if (isDefinedFn(onSearh)) {
      onSearh(value);
    }
  };

  const changeInputHandler = (inputValue: string) => {
    setSearchValue(inputValue);
    if (isDefinedFn(onChange)) {
      onChange(inputValue);
    }
  };

  const keyDownHandler = (e: KeyboardEvent) => {
    if (e.code === "Space" || e.code === "Enter") {
      e.preventDefault();
      if (isDefinedFn(onSearh)) {
        onSearh(searchValue);
      }
    }
  };

  return (
    <div className={s.wrapper}>
      <TextInput
        className={s.input}
        value={searchValue}
        placeholder={placeholder}
        onChange={changeInputHandler}
        onKeyDown={(e) => keyDownHandler(e)}
        {...otherProps}
      />
      <div className={s.button}>
        <IconButton icon={IconSearch} size="s" onClick={() => seacrchHandler(searchValue)} />
      </div>
    </div>
  );
};

export { SearchInput };
