import type { ButtonClassesType } from "./button.types";

export const buttonClasses: ButtonClassesType = (params) => {
  const { disabled, size, variant } = params;

  const buttonSizeClass =
    size == "sm"
      ? "rounded-md px-2 py-1"
      : size == "md"
        ? "rounded-md px-4 py-2"
        : size == "lg"
          ? "rounded-lg px-6 py-3"
          : size == "xl"
            ? "rounded-lg px-8 py-4"
            : size == "2xl"
              ? "rounded-xl px-10 py-5"
              : "rounded-xl px-12 py-6";

  const buttonVariantClass = `${
    variant == "primary"
      ? "bg-btn-color-1000 text-white border border-btn-color-1000"
      : variant == "secondary"
        ? "bg-transparent text-btn-color-1000 border border-btn-color-1000"
        : "bg-transparent text-btn-color-1000 border border-transparent"
  } ${disabled ? "opacity-50 cursor-not-allowed" : "hover:opacity-75"}
  `;

  return {
    buttonSizeClass,
    buttonVariantClass,
  };
};
