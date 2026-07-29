import { log } from 'console'
import React, { useCallback } from 'react'
import {fabric} from 'fabric'

export const useEditor = () => {
  const init = useCallback(({
    initialCanvas, 
    initialContainer
  }: {
    initialCanvas: fabric.Canvas;
    initialContainer: HTMLDivElement
  })=>{
    console.log('init editor')
  }, []) 

  return {init}
}
