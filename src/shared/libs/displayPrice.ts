import { isDefinedNumber } from "./isDefined";

type DisplayPriceProps = {
  value: string | number;
  division?: number;
  currency?: string;
};

const displayPrice = ({ value, division = 3, currency = "₽" }: DisplayPriceProps) => {
  const divisionValue = 10 ** 3;
  let priceValue = isDefinedNumber(value) ? value : parseInt(value);
  let dispalyPriceValue = "";

  while (priceValue !== 0) {
    const valueWithRemainder = (priceValue / divisionValue).toFixed(division);

    let remainder = valueWithRemainder.split(".")[1];

    if (priceValue < divisionValue) {
      remainder = `${Number(remainder)}`;
    }

    dispalyPriceValue = " " + remainder + dispalyPriceValue;

    priceValue = Number((priceValue / divisionValue).toFixed(0));
  }
  return dispalyPriceValue.trim() + ` ${currency}`;
};

export { displayPrice };
