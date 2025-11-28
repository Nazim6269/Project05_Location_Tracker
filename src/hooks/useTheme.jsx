import { use } from "react";
import { ThemeContext } from "../context/theme-context";

export const useTheme = () => use(ThemeContext);
