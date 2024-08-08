import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";
import cls from "./LangSwitcher.module.scss";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation("shared");
  const onClick = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={classNames(cls.LangSwitcher, {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onClick}>
        {t("язык")}
      </Button>
    </div>
  );
};
