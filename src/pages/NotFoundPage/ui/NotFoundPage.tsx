import { useTranslation } from "react-i18next";
import { classNames } from "shared/utils/classNames/classNames";
import cls from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation("shared");
  return (
    <main className={classNames(cls.NotFoundPage, {}, [className])}>
      {t("Страница не найдена")}
    </main>
  );
};
