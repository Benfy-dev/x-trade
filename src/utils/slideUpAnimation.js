"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Slide up animation triggered when element enters viewport
 * @param {string} className - Target class name to animate
 * @param {Object} options - Animation options
 */
export function slideUpByClass(className, options = {}) {
  const {
    duration = 0.8,
    delay = 0.2,
    ease = "power2.out",
    start = "top 70%",
  } = options;

  gsap.utils.toArray(`.${className}`).forEach((element) => {
    gsap.fromTo(
      element,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration,
        delay,
        ease,
        scrollTrigger: {
          trigger: element,
          start: start, // Animation triggers when top of element hits 80% viewport
          toggleActions: "play none none none",
          // markers: true,
        },
      }
    );
  });
}
