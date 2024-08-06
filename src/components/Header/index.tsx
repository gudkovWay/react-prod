import { useTheme } from "../../theme/useTheme";

const Header = () => {
  const { toggleTheme } = useTheme();
  return (
    <header>
      <button onClick={toggleTheme}>toggle theme</button>
    </header>
  );
};

export default Header;
