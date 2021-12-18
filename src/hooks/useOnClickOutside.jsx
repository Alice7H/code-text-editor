import {useEffect } from "react";

export default function useOnClickOutside(ref, ref2, handler) {

  useEffect(() => {
    const listener = event => {
      const ignoreElement = document.querySelector(ref2);
      if (!ref.current || ref.current.contains(event.target) || ignoreElement.contains(event.target)) {
        return;
      }
      handler(event);
    };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // useCallback before.
    [ref, ref2, handler]
  );
}
