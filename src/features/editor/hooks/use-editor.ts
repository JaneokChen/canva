import { useCallback } from "react";
import type { fabric } from "fabric";

export const useEditor = () => {
  const init = useCallback(({
    initialCanvas,
    initialContainer,
  }: {
    initialCanvas: fabric.Canvas;
    initialContainer: HTMLDivElement;
  }) => {
    // console.log("init editor");
    initialCanvas.setWidth(initialContainer.offsetHeight)
    initialCanvas.setWidth(initialContainer.offsetWidth)

  }, []);

  return { init };
};
