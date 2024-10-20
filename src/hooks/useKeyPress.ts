import { useEffect } from "react";

export const useKeyPress = (targetKey: string, callBack: () => void) => {
  useEffect(() => {
    const hanldeKeyUp = (ev: KeyboardEvent) => {
      const { ctrlKey, shiftKey, key } = ev;
      if (ctrlKey && shiftKey && key == targetKey) {
        callBack();
      }
    };
    document.addEventListener("keyup", hanldeKeyUp);
    return () => {
      document.removeEventListener("keyup", hanldeKeyUp);
    };
  }, [targetKey, callBack]);
};
