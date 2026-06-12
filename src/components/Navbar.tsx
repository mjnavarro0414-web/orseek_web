"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { NAV_ITEMS, NavChild, NavItem } from "@/types/config";
import {
  navbarVariants,
  dropdownVariants,
  dropdownItemVariants,
  mobileMenuVariants,
  chevronVariants,
  backdropVariants,
  bar1Variants,
  bar2Variants,
  bar3Variants,
} from "@/types/variants";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 20));

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openDropdown = useCallback((label: string) => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setActiveDropdown(label);
  }, []);

  const closeDropdown = useCallback(() => {
    dropdownTimer.current = setTimeout(() => setActiveDropdown(null), 100);
  }, []);

  const keepDropdown = useCallback(() => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <motion.header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200 bg-white/80 font-sans backdrop-blur-xl"
        variants={navbarVariants}
        animate={scrolled ? "scrolled" : "top"}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Container */}
        <div className="mx-auto flex h-16 max-w-[1160px] items-center gap-1 px-5">
          {/* Logo */}
          {/* <Link
            href="/"
            className="mr-3 flex flex-shrink-0 items-center gap-2"
            aria-label="Home"
          >
            <motion.div
              whileHover={{ scale: 1.08, rotate: 6 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
            >
              <img
                src="/work.gif"
                alt="Logo animation"
                width={40}
                height={40}
                className="rounded-[7px]"
              />
            </motion.div>

            <span className="text-[20px] font-supreme font-bold tracking-tight text-zinc-900">
              OrSeek
            </span>
          </Link> */}

          {/* Desktop Nav */}
          <nav
            className="hidden items-center gap-0.5 md:flex"
            aria-label="Main"
          >
            {NAV_ITEMS.map((item: NavItem) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <button
                    className={[
                      "flex items-center gap-1 rounded-[7px] px-3 py-1.5 text-sm font-medium transition-colors",
                      isActive(item.href)
                        ? "bg-zinc-100 text-zinc-900"
                        : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
                    ].join(" ")}
                  >
                    {item.label}
                    <motion.svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      variants={chevronVariants}
                      animate={
                        activeDropdown === item.label ? "open" : "closed"
                      }
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </motion.svg>
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        className="absolute left-[-12px] top-[calc(100%+10px)] z-50 min-w-[240px] overflow-hidden rounded-[12px] border border-zinc-200 bg-white p-1.5"
                        style={{
                          boxShadow:
                            "0 10px 30px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                        }}
                        variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        onMouseEnter={keepDropdown}
                        onMouseLeave={closeDropdown}
                      >
                        {item.children.map((child: NavChild, i: number) => (
                          <motion.div
                            key={child.href}
                            custom={i}
                            variants={dropdownItemVariants}
                          >
                            <Link
                              href={child.href}
                              className="flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 transition-colors hover:bg-zinc-100"
                            >
                              {child.icon && (
                                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-100">
                                  {child.icon}
                                </span>
                              )}
                              <span>
                                <div className="text-[13.5px] font-semibold text-zinc-900">
                                  {child.label}
                                </div>
                                {child.description && (
                                  <div className="text-[11.5px] text-zinc-500">
                                    {child.description}
                                  </div>
                                )}
                              </span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[
                    "rounded-[7px] px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "bg-zinc-100 text-zinc-900"
                      : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA */}
          <div className="ml-auto hidden items-center gap-2 md:flex">
            <Link
              href="/login"
              className="rounded-[7px] border border-zinc-200 px-3.5 py-1.5 text-sm font-medium text-zinc-600 hover:bg-zinc-100"
            >
              Log in
            </Link>

            <Link
              href="/signup"
              className="rounded-[7px] bg-[#1D4ED8] px-3.5 py-1.5 text-sm font-semibold text-white hover:bg-[#1E3A8A]"
            >
              Get started
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg hover:bg-zinc-100 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <motion.span
              className="h-[2px] w-5 bg-zinc-600"
              variants={bar1Variants}
              animate={mobileOpen ? "open" : "closed"}
            />
            <motion.span
              className="h-[2px] w-5 bg-zinc-600"
              variants={bar2Variants}
              animate={mobileOpen ? "open" : "closed"}
            />
            <motion.span
              className="h-[2px] w-5 bg-zinc-600"
              variants={bar3Variants}
              animate={mobileOpen ? "open" : "closed"}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="border-t border-zinc-200 bg-white"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="mx-auto flex max-w-[1160px] flex-col px-4 pb-5 pt-3">
                {NAV_ITEMS.map((item: any) => (
                  <div key={item.label}>
                    <Link
                      href={item.href}
                      className="block rounded-[7px] px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}

                <div className="mt-3 border-t border-zinc-200 pt-3">
                  <Link
                    href="/login"
                    className="block rounded-[7px] px-3 py-2 text-center text-sm text-zinc-600 hover:bg-zinc-100"
                  >
                    Log in
                  </Link>

                  <Link
                    href="/signup"
                    className="mt-2 block rounded-[7px] bg-zinc-900 py-2 text-center text-sm font-semibold text-white"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/20"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
