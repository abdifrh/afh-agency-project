
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that automatically scrolls the window to the top
 * whenever the route (pathname) changes
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Automatically scroll to top when navigation occurs
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
