export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Плавне прокручування
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};
