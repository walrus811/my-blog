import { useEffect, useRef } from "react";

enum RollingTextIntervalState
{
  Rolling,
  Stopping,
  Stopped,
}

function useRollingText(text: string, interval = 200)
{
  const rollingTextIntervalId = useRef(0);
  const rollingTextIntervalState = useRef(RollingTextIntervalState.Stopped);
  const rollingText = useRef(text);

  useEffect(() =>
  {
    return function cleanUp()
    {
      clearInterval(rollingTextIntervalId.current);
    };
  }, []);

  function fireRollingText(e: React.MouseEvent<HTMLElement, MouseEvent> | React.TouchEvent<HTMLElement>)
  {
    if (rollingTextIntervalId.current !== 0) return;
    const target = e.target as HTMLElement;
    rollingTextIntervalId.current = window.setInterval(() =>
    {
      if (
        rollingTextIntervalState.current === RollingTextIntervalState.Stopped
      )
      {
        clearInterval(rollingTextIntervalId.current);
        rollingTextIntervalId.current = 0;
        return;
      } else if (
        rollingTextIntervalState.current === RollingTextIntervalState.Stopping
      )
      {
        rollingText.current = text;
        target.innerText = rollingText.current;
        rollingTextIntervalState.current = RollingTextIntervalState.Stopped;
      } else if (
        rollingTextIntervalState.current === RollingTextIntervalState.Rolling
      )
      {
        rollingText.current =
          rollingText.current.slice(2) + rollingText.current.slice(0, 2);
        target.innerText = rollingText.current;
      }
    }, interval);
    rollingTextIntervalState.current = RollingTextIntervalState.Rolling;
  }

  function stopRollingText(e: React.MouseEvent<HTMLElement, MouseEvent> | React.TouchEvent<HTMLElement>)
  {
    rollingTextIntervalState.current = RollingTextIntervalState.Stopping;
  }

  return [fireRollingText, stopRollingText];
}

export default useRollingText;