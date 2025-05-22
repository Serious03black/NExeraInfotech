
import { useEffect, RefObject } from 'react';

interface UseScrollAnimationsProps {
  titleSelector?: string;
  textSelector?: string;
  imageSelector?: string;
  cardsSelector?: string;
  listItemsSelector?: string;
  statsSelector?: string;
  calligraphySelector?: string;
  containerRef?: RefObject<HTMLElement>;
  onlyOnce?: boolean;
}

const useScrollAnimations = ({
  titleSelector = '.gsap-title',
  textSelector = '.gsap-paragraph',
  imageSelector = '.gsap-image',
  cardsSelector = '.gsap-card',
  listItemsSelector = '.gsap-list-item',
  statsSelector = '.gsap-stat',
  calligraphySelector = '.gsap-calligraphy',
  containerRef,
  onlyOnce = true
}: UseScrollAnimationsProps = {}) => {
  
  useEffect(() => {
    const options = {
      root: containerRef?.current || null,
      rootMargin: '0px',
      threshold: 0.1
    };

    // Helper function to handle intersection
    const handleIntersection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target;

          // Add class that triggers CSS animation
          target.classList.add('is-visible');
          
          // Handle special case for stats counter
          if (target.classList.contains('gsap-stat')) {
            animateCounter(target as HTMLElement);
          }

          // If only animate once, unobserve after animation
          if (onlyOnce) {
            observer.unobserve(target);
          }
        }
      });
    };

    // Create the observer
    const observer = new IntersectionObserver(handleIntersection, options);

    // Helper for counter animation
    const animateCounter = (element: HTMLElement) => {
      const countTo = parseInt(element.dataset.count || '0', 10);
      const duration = 2000; // 2 seconds
      const startTime = performance.now();
      let currentCount = 0;
      
      const updateCounter = (timestamp: number) => {
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        currentCount = Math.floor(countTo * progress);
        element.textContent = currentCount.toString();
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      };
      
      requestAnimationFrame(updateCounter);
    };

    // Observe all elements
    [titleSelector, textSelector, imageSelector, cardsSelector, 
      listItemsSelector, statsSelector, calligraphySelector].forEach(selector => {
      document.querySelectorAll(selector).forEach(element => {
        observer.observe(element);
      });
    });

    // Clean up
    return () => {
      observer.disconnect();
    };
  }, [
    titleSelector, textSelector, imageSelector, cardsSelector, 
    listItemsSelector, statsSelector, calligraphySelector, 
    containerRef, onlyOnce
  ]);
};

export default useScrollAnimations;
