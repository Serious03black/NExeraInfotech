
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Initialize app
const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}

// Simplified smooth scrolling with native browser API
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const href = this.getAttribute('href');
      if (href) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          history.pushState(null, '', href);
        }
      }
    });
  });
});
