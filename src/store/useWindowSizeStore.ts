import { create } from 'zustand'

interface Dimension {
  dimension: {
    width: number
    height: number
  },
  orientation: 'landscape' | 'portrait',
  setDimension: (width: number, height: number) => void
}

export const useWindowSizeStore = create<Dimension>((set) => ({   
    dimension: {
      width: window.innerWidth,
      height: window.innerHeight
    },
    orientation: window.innerWidth > window.innerHeight ? 'landscape' : 'portrait',
    setDimension: (width: number, height: number) => set({ dimension: { width, height }, orientation: width > height ? 'landscape' : 'portrait'}),
}))