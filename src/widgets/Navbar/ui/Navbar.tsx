import { useTranslation } from "react-i18next";

import { classNames } from "shared/lib/helpers/classNames/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation("shared");
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          to={RoutePath.main}
          className={cls.mainLink}
          theme={AppLinkTheme.INVERTED}
        >
          {t("Главная")}
        </AppLink>
        <AppLink to={RoutePath.about} theme={AppLinkTheme.ADDITIONAL}>
          {t("О сайте")}
        </AppLink>
      </div>
    </nav>
  );
};
