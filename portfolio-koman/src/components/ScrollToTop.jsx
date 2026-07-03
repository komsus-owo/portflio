import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (hash) {
      const sectionId = hash.slice(1);

      const timer = window.setTimeout(() => {
        const section = document.getElementById(sectionId);

        if (section) {
          section.scrollIntoView({
            behavior: 'auto',
            block: 'start',
          });
        }
      }, 50);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    });

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    return undefined;
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;