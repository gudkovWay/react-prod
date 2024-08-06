import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useTheme } from "./providers/ThemeProvider";

import { MainPage } from "pages/MainPage";
import { AboutPage } from "pages/AboutPage";

import Header from "widgets/Header";

import { classNames } from "shared/lib/helpers/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPage />} />
          <Route path={"/"} element={<MainPage />} />
          <Route path={"*"} element={<div> 404 </div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
