interface ScrollOptions {
    delay?: number,
    offset?: number
  }
  
  export default {
    gotoSection(sectionId: string, options: ScrollOptions = { delay: 200, offset: 70 }) {
      const { delay = 200, offset = 70 } = options;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        const bodyRect = document.body.getBoundingClientRect().top;
        if (!element) return;
  
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }, delay);
    },
  };
  