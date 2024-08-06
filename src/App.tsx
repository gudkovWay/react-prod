import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { useTheme } from "./theme/useTheme";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import Header from "./components/Header";

import "./styles/index.scss";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
