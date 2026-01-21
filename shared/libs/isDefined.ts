import { WithNotDefinedType } from "../model";

export const isDefined = <T extends any>(
  v: WithNotDefinedType<T>
): v is NonNullable<T> => v !== null && v !== undefined;

export const isDefinedString = <T extends unknown>(
  v: WithNotDefinedType<T>
): v is T => {
  return isDefined(v) && typeof v === "string" && v.trim().length !== 0;
};

export const isDefinedNumber = <T extends unknown>(
  v: WithNotDefinedType<T>
): v is T => {
  return isDefined(v) && !Number.isNaN(v) && Number.isFinite(v);
};

export const isDefinedObject = <T extends unknown>(
  v: WithNotDefinedType<T>
): v is T => {
  return isDefined(v) && typeof v === "object";
};

export const isDefinedArray = <T extends unknown>(v: WithNotDefinedType<T[]>): v is Array<T> => {
  return isDefinedObject(v) && Array.isArray(v) && !!v?.length;
};

export const isDefinedFn = (v: unknown): v is "function" => {
  return isDefined(v) && typeof v === "function";
};
