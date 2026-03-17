import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes } from "react";

export type HtmlElementPropsType<T> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type HtmlButtonElementPropsType<T> = DetailedHTMLProps<ButtonHTMLAttributes<T>, T>;
