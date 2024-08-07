import { useTheme } from "./providers/ThemeProvider";

import Header from "widgets/Header";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { AppRouter } from "./providers/router";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={RoutePath.main}>Home</Link>
      <Link to={RoutePath.about}>About</Link>
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
