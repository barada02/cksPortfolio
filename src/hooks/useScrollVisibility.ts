import { useState, useEffect } from 'react';

interface ScrollOptions {
  threshold?: number;
  offsetPx?: number;
}

/**
 * Custom hook to detect when an element is visible in the viewport
 * @param options - Configuration options
 * @returns An object with ref and isVisible properties
 */
const useScrollVisibility = ({ threshold = 0.1, offsetPx = 0 }: ScrollOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null, // viewport
        rootMargin: `${offsetPx}px`,
        threshold,
      }
    );

    observer.observe(ref);

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, threshold, offsetPx]);

  return { ref: setRef, isVisible };
};

export default useScrollVisibility;
