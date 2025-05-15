
import { useEffect, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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
    // Helper function to create a ScrollTrigger context if using a container ref
    const getScrollTriggerConfig = (trigger: Element) => {
      if (containerRef?.current) {
        return {
          trigger,
          start: "top 85%",
          toggleActions: "play none none none",
          scroller: containerRef.current,
        };
      }
      return {
        trigger,
        start: "top 85%",
        toggleActions: "play none none none",
      };
    };

    // Titles animation
    const titles = document.querySelectorAll(titleSelector);
    titles.forEach(title => {
      gsap.fromTo(title, 
        { y: 50, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          scrollTrigger: getScrollTriggerConfig(title)
        }
      );
    });
    
    // Text paragraphs animation
    const paragraphs = document.querySelectorAll(textSelector);
    paragraphs.forEach(paragraph => {
      gsap.fromTo(paragraph, 
        { y: 30, opacity: 0 }, 
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          scrollTrigger: getScrollTriggerConfig(paragraph)
        }
      );
    });

    // Images animation
    const images = document.querySelectorAll(imageSelector);
    images.forEach(image => {
      gsap.fromTo(image,
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: getScrollTriggerConfig(image)
        }
      );
    });

    // Cards animation with stagger
    const cards = document.querySelectorAll(cardsSelector);
    if (cards.length > 0) {
      gsap.fromTo(cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.6,
          scrollTrigger: getScrollTriggerConfig(cards[0])
        }
      );
    }

    // List items with alternate directions
    const listItems = document.querySelectorAll(listItemsSelector);
    listItems.forEach((item, index) => {
      gsap.fromTo(item,
        { 
          x: index % 2 === 0 ? -30 : 30, 
          opacity: 0 
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: getScrollTriggerConfig(item)
        }
      );
    });

    // Stats counter animation
    const stats = document.querySelectorAll(statsSelector);
    stats.forEach((stat) => {
      const countTo = parseInt(stat.textContent || '0', 10);
      
      gsap.fromTo(stat,
        { innerText: "0" },
        {
          innerText: countTo,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: getScrollTriggerConfig(stat)
        }
      );
    });
    
    // Calligraphy elements animation - special effect for decorative typography
    const calligraphyElements = document.querySelectorAll(calligraphySelector);
    calligraphyElements.forEach((element) => {
      // Create a timeline for more complex animation
      const tl = gsap.timeline({
        scrollTrigger: getScrollTriggerConfig(element)
      });
      
      tl.fromTo(element, 
        { 
          opacity: 0, 
          scale: 0.8, 
          rotationZ: -5 
        },
        {
          opacity: 1,
          scale: 1,
          rotationZ: 0,
          duration: 1.2,
          ease: "elastic.out(1, 0.3)"
        }
      );
      
      // Add a subtle continuous animation
      gsap.to(element, {
        y: "-5px",
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [titleSelector, textSelector, imageSelector, cardsSelector, listItemsSelector, statsSelector, calligraphySelector, containerRef, onlyOnce]);
};

export default useScrollAnimations;
