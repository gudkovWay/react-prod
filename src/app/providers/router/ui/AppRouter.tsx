import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Route, Routes } from "react-router-dom";

import { PageLoader } from "widgets/PageLoader";
import { routeConfig } from "shared/lib/config/routeConfig/routeConfig";

export const AppRouter = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route
            key={path}
            element={<div className="page-wrapper">{element}</div>}
            path={path}
          />
        ))}
      </Routes>
    </Suspense>
  );
};
