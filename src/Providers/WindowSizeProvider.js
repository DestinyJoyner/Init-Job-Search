import { useLayoutEffect, useState, useContext, createContext, useEffect } from 'react';

export const WindowSizeContextData = createContext()

export function useWindowSizeProvider() {
    return useContext(WindowSizeContextData)
}

function WindowSizeProvider({children}) {
    // Guide -> https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react

    const [width, setWidth] = useState(0);
    const [isDesktopView, setIsDesktopView] = useState()

    useLayoutEffect(() => {
      function updateWidth() {
        setWidth(window.innerWidth);
      }
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        const windowWidth = width > 850 ? true : false
        setIsDesktopView(windowWidth)
    }, [width])

  return (
    <WindowSizeContextData.Provider value={{
        isDesktopView
    }}>
        {children}
    </WindowSizeContextData.Provider>
  )
}

export default WindowSizeProvider;