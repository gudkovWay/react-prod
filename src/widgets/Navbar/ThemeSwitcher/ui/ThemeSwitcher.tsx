import { useTheme, Theme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/helpers/classNames/classNames";

import { Button, ButtonTheme } from "shared/ui/Button/Button";
import DarkThemeIcon from "shared/assets/icons/dark.svg";
import LightThemeIcon from "shared/assets/icons/light.svg";
import cls from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};
