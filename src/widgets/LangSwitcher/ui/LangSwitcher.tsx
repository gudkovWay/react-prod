import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames/classNames";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation("shared");
  const onClick = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };
  return (
    <div className={classNames("", {}, [className])}>
      <Button theme={ButtonTheme.CLEAR} onClick={onClick}>
        {t("язык")}
      </Button>
    </div>
  );
};
