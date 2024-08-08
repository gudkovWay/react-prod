import { classNames } from "shared/lib/helpers/classNames/classNames";

import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink
          to={RoutePath.main}
          className={cls.mainLink}
          theme={AppLinkTheme.INVERTED}
        >
          Главная
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.ADDITIONAL}>
          О сайте
        </AppLink>
      </div>
    </nav>
  );
};
