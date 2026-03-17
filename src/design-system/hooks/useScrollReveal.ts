import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface UseScrollRevealOptions {
  /** Seletor dos elementos filhos a animar */
  selector?: string;
  /** y inicial (px) */
  fromY?: number;
  /** Stagger entre itens (s) */
  stagger?: number;
  /** Quando o trigger dispara (ex: "top 85%") */
  start?: string;
}

/**
 * Hook que anima filhos de um container quando entram no viewport via GSAP ScrollTrigger.
 * Retorna um ref para anexar ao container.
 */
export function useScrollReveal<T extends HTMLElement>({
  selector = ':scope > *',
  fromY = 30,
  stagger = 0.15,
  start = 'top 85%',
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>(selector);
    if (!targets.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: fromY },
        {
          opacity: 1,
          y: 0,
          stagger,
          duration: 0.55,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [selector, fromY, stagger, start]);

  return ref;
}
