import { cloneElement, MouseEvent, ReactElement, ReactNode, useState } from "react";
import { isDefinedFn, isDefinedString } from "../../libs";
import cn from "classnames";
import s from "./collapsableContent.module.scss";

type Props = {
  triggerElement: ReactElement<{
    onClick?: (e: MouseEvent<HTMLElement>) => void;
    className?: string;
  }>;
  content: ReactNode;
  isOpen?: boolean;
};

const CollapsableContent: React.FC<Props> = ({ triggerElement, content, isOpen = false }) => {
  const [open, setOpen] = useState(isOpen);

  const triggerElementProps = triggerElement.props;
  const { onClick, className, ...otherTriggerElementProps } = triggerElementProps;

  const triggerHanlder = (e: MouseEvent<HTMLElement>) => {
    setOpen((open) => !open);
    if (isDefinedFn(onClick)) {
      onClick(e);
    }
  };

  return (
    <>
      {cloneElement(triggerElement, {
        ...otherTriggerElementProps,
        onClick: (e) => triggerHanlder(e),
        className: cn(className, open && s.active),
      })}
      {open && content}
    </>
  );
};

export { CollapsableContent };
