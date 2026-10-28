"use client";

import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** false: solo se mueve, nunca parte de opacidad 0 (para el contenido que define el LCP). */
  fade?: boolean;
};

/**
 * Entrada breve con ease-out-quart (solo transform y opacity, sin rebote).
 * Con prefers-reduced-motion el CSS global fuerza el estado final; sin JS lo hace el <noscript> del layout.
 */
export function Reveal({ children, className, delay = 0, y = 18, fade = true }: Props) {
  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        data-reveal
        className={className}
        initial={{ opacity: fade ? 0 : 1, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -8% 0px" }}
        transition={{ duration: 0.65, delay, ease: [0.25, 1, 0.5, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
