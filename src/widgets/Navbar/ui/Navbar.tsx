import { Link } from "react-router-dom";

import { classNames } from "shared/lib/helpers/classNames/classNames";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cls.navbar}>
      <Link to={RoutePath.main}>Главная</Link>
      <Link to={RoutePath.about}>О сайте</Link>
    </nav>
  );
};
