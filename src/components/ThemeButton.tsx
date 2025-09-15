import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ThemeContextType } from "../context/ThemeProvider";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import styles from "./ThemeButton.module.css";

function ThemeButton({ theme, toggleTheme }: ThemeContextType) {
  return (
    <button className={styles.button} onClick={toggleTheme}>
      {theme === "light" ? (
        <FontAwesomeIcon icon={faMoon} />
      ) : (
        <FontAwesomeIcon icon={faSun} />
      )}
    </button>
  );
}

export default ThemeButton;
