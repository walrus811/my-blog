import { useEffect, useState } from "react";

function useTailwindCssDarkMode()
{
  const darkModeState = useState(false);
  const [darkMode, setDarkMode] = darkModeState;

  useEffect(function initializePage()
  {
    document
      .getElementsByTagName("body")[0]
      .classList.add(
        "bg-zinc-50",
        "dark:bg-zinc-900",
        "text-black",
        "dark:text-white"
      );
    const savedDarkMoode = localStorage.getItem("darkMode") === "true" ? true : false;
    setDarkMode(savedDarkMoode);
  }, []);

  useEffect(
    function effectForDarkMode()
    {
      const htmlElement = document.getElementsByTagName("html")[0];
      toggleHtmlDarkMode(htmlElement, darkMode);
      localStorage.setItem("darkMode", darkMode.toString());
    },
    [darkMode]
  );
  return darkModeState;
}

function toggleHtmlDarkMode(htmlElement: HTMLElement, darkMode: boolean)
{
  if (darkMode)
  {
    htmlElement?.classList.add("dark");
  } else
  {
    htmlElement?.classList.remove("dark");
  }
}

export default useTailwindCssDarkMode;