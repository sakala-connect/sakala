import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTopOnNavigation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly reset scroll to top-left when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // This component doesn't render anything
};