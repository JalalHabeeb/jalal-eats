import React from "react";
import { func, string } from "prop-types";
import { ThemeButton } from "../style/TogglesStyle";
import { CgDarkMode } from "react-icons/cg";

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <ThemeButton onClick={toggleTheme}>
      <CgDarkMode />
      <p>Light / Dark</p>
    </ThemeButton>
  );
};
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};
export default Toggle;
