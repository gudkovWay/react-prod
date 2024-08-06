import { useTheme } from "app/providers/ThemeProvider";

const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header>
      <button onClick={toggleTheme}>toggle theme</button>
    </header>
  );
};

export default Header;
