export default function getTheme() {
  let isLight = true,
    theme = "light";
  if (typeof document !== "undefined") {
    if (document.documentElement.classList.contains("dark")) {
      theme = "dark";
      isLight = false;
    }
  }
  return { theme, isLight };
}
