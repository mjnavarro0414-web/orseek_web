import type { Variants } from "framer-motion";

export const navbarVariants: Variants = {
  top: {
    backgroundColor: "rgba(255,255,255,0)",
    boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
    backdropFilter: "blur(0px)",
  },
  scrolled: {
    backgroundColor: "rgba(255,255,255,0.85)",
    boxShadow: "0 1px 0 rgba(0,0,0,0.07), 0 8px 32px rgba(0,0,0,0.08)",
    backdropFilter: "blur(20px)",
  },
};

export const navbarVariantsDark: Variants = {
  top: {
    backgroundColor: "rgba(9,9,11,0)",
    boxShadow: "0 0px 0px 0 rgba(0,0,0,0)",
    backdropFilter: "blur(0px)",
  },
  scrolled: {
    backgroundColor: "rgba(9,9,11,0.88)",
    boxShadow: "0 1px 0 rgba(255,255,255,0.06), 0 8px 32px rgba(0,0,0,0.45)",
    backdropFilter: "blur(20px)",
  },
};

export const dropdownVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -6,
    scale: 0.97,
    transition: { duration: 0.14, ease: "easeIn" },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export const dropdownItemVariants: Variants = {
  hidden: { opacity: 0, x: -5 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.045, duration: 0.18, ease: "easeOut" },
  }),
};

export const mobileMenuVariants: Variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.22, ease: [0.4, 0, 0.2, 1] },
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export const mobileItemVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 + i * 0.05, duration: 0.22, ease: "easeOut" },
  }),
};

export const mobileSubVariants: Variants = {
  hidden: { opacity: 0, height: 0, transition: { duration: 0.18 } },
  visible: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};

export const chevronVariants: Variants = {
  closed: { rotate: 0 },
  open: {
    rotate: 180,
    transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
  },
};

export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const bar1Variants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 6, transition: { duration: 0.22, ease: "easeInOut" } },
};
export const bar2Variants: Variants = {
  closed: { opacity: 1, scaleX: 1 },
  open: { opacity: 0, scaleX: 0, transition: { duration: 0.15 } },
};
export const bar3Variants: Variants = {
  closed: { rotate: 0, y: 0 },
  open: {
    rotate: -45,
    y: -6,
    transition: { duration: 0.22, ease: "easeInOut" },
  },
};
