import { AppRouter } from "./providers/router";
import { useTheme } from "./providers/ThemeProvider";

import { Navbar } from "widgets/Navbar";
import { classNames } from "shared/lib/helpers/classNames/classNames";
import "./styles/index.scss";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
