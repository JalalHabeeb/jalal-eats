import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Logo, Nav } from "./style/AppStyle";
import { GiKnifeFork } from "react-icons/gi";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./style/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";

import { useDarkMode } from "./components/useDarkMode";
import Toggle from "./components/Toggler";

function App() {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <Toggle theme={theme} toggleTheme={themeToggler}></Toggle>
        <>
          <GlobalStyles />
          <BrowserRouter>
            <Nav>
              <GiKnifeFork />
              <Logo to={"/"}>Jalal Eats</Logo>
            </Nav>
            <Search />
            <Category />
            <Pages />
          </BrowserRouter>
        </>
      </ThemeProvider>
    </div>
  );
}

export default App;
