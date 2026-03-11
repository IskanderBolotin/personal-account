import { format } from "date-fns";
import { ru } from "date-fns/locale";

export const enum DateFormat {
  dd_MM_yyyy = "dd.MM.yyyy",
  dd_MMMM_yyyy = "dd MMMM yyyy",
}
type DisplayDateProps = {
  date: Date;
  formatType?: DateFormat;
};

export const displayDate = ({ date, formatType = DateFormat.dd_MMMM_yyyy }: DisplayDateProps) => {
  return format(new Date(date), formatType, { locale: ru });
};
