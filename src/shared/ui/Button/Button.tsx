import { ButtonHTMLAttributes, FC } from "react";
import { classNames } from "shared/utils/classNames/classNames";
import cls from "./Button.module.scss";

export enum ButtonTheme {
  CLEAR = "clear",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    onClick,
    children,
    className,
    type = "button",
    theme = ButtonTheme.CLEAR,
    ...otherProps
  } = props;

  return (
    <button
      /* eslint-disable react/button-has-type */
      type={type}
      className={classNames(cls.Button, {}, [className, cls[theme]])}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
