import type { MouseEventHandler } from "react";

type buttonSizes = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type buttonVariants = "primary" | "secondary" | "tertiary";


export interface ButtonProps {
  children: (string | JSX.Element)[] | string | JSX.Element;
  className?: string;
  color?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: buttonSizes;
  type?: "button" | "reset" | "submit";
  variant?: buttonVariants;
}

export interface ButtonClassesParams {
  disabled: boolean;
  size: buttonSizes;
  variant: buttonVariants;
}

interface ButtonClassesReturnType {
  buttonSizeClass: string;
  buttonVariantClass: string;
}

export type ButtonClassesType = (params: ButtonClassesParams) => ButtonClassesReturnType;