import { useEffect, useState } from "react";


/**
 * @param bodyClassList class list for body element, in IOS Safari body element's classes not work well so it needs to be injected at runtime
 */
function useTailwindCssDarkMode(bodyClassList: string[])
{
  const darkModeState = useState(false);
  const [darkMode, setDarkMode] = darkModeState;

  useEffect(function initializePage()
  {
    document
      .getElementsByTagName("body")[0]
      .classList.add(
        ...bodyClassList
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