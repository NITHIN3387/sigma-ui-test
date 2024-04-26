"use client"

import { hexToRgb } from "../../utils/hexToRgb";
import { buttonClasses } from "./button.classes";
import type { ButtonClassesParams, ButtonProps } from "./button.types";
import { CSSProperties } from "react";

export const Button = (props: ButtonProps) => {
  const {
    children,
    className = "",
    color = "0 0 0",
    disabled = false,
    onClick = () => {},
    size = "md",
    type = "button",
    variant = "primary",
  } = props;

  const buttonClassParams: ButtonClassesParams = {
    disabled,
    size,
    variant,
  };

  const { buttonSizeClass, buttonVariantClass } = buttonClasses(buttonClassParams);

  return (
    <button
      style={{'--btn-color': hexToRgb(color)} as CSSProperties}
      className={`${buttonSizeClass} ${buttonVariantClass} ${className}`}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
