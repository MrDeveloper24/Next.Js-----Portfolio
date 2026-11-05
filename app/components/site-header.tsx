"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { profile } from "../portfolio-data";

const navigation = [
  ["Work", "/projects"],
  ["Skills", "/#skills"],
  ["Experience", "/#experience"],
  ["Education", "/#education"],
  ["About", "/#about"],
  ["Contact", "/#contact"],
];

function subscribeToTheme(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener("portfolio-theme-change", onChange);
  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener("portfolio-theme-change", onChange);
  };
}

function getSavedTheme(): "dark" | "light" {
  return window.localStorage.getItem("portfolio-theme") === "light"
    ? "light"
    : "dark";
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useSyncExternalStore(subscribeToTheme, getSavedTheme, () => "dark");
  const [scrolled, setScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    if (!menuOpen) return;

    function closeOnOutsidePointer(event: PointerEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (
        !navigationRef.current?.contains(target) &&
        !menuToggleRef.current?.contains(target)
      ) {
        setMenuOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuToggleRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem("portfolio-theme", nextTheme);
    window.dispatchEvent(new Event("portfolio-theme-change"));
  }

  return (
    <header className={`sticky top-0 z-20 -mx-[clamp(22px,4vw,64px)] flex h-[84px] items-center justify-between border-b px-[clamp(22px,4vw,64px)] backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-200 max-[1024px]:-mx-[27px] max-[1024px]:h-[72px] max-[1024px]:px-[27px] max-[650px]:-mx-[18px] max-[650px]:h-16 max-[650px]:px-[18px] ${scrolled ? "border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_94%,transparent)] shadow-[0_8px_24px_#0002]" : "border-transparent bg-[color-mix(in_srgb,var(--bg)_54%,transparent)]"}`}>
      <Link className="flex min-w-0 items-center gap-[11px] max-[650px]:gap-2" href="/#home" scroll aria-label={`${profile.name}, home`} onClick={() => setMenuOpen(false)}>
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[7px] border border-[#3c527a] bg-[var(--surface-raised)] font-mono text-[10px] font-bold tracking-[-0.08em] text-[var(--blue-bright)] max-[650px]:h-[29px] max-[650px]:w-[29px]">NB</span>
        <span className="whitespace-nowrap text-[15px] font-semibold tracking-[-0.025em] text-[var(--text)] max-[1024px]:text-base max-[650px]:text-lg">
          <span className="hidden min-[1025px]:inline">Muhammad Naseem <b className="font-medium text-[var(--muted)]">Barkat</b></span>
          <span className="hidden min-[651px]:max-[1024px]:inline">M.NASEEM</span>
          <span className="inline min-[651px]:hidden">M.N</span>
        </span>
      </Link>

      <button
        ref={menuToggleRef}
        className="ml-auto hidden h-[38px] w-10 flex-col items-center justify-center gap-[5px] rounded border border-[var(--line-bright)] bg-[var(--surface)] transition hover:border-[#627ba8] hover:bg-[var(--surface-raised)] max-[1024px]:flex max-[650px]:h-9 max-[650px]:w-[38px]"
        type="button"
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="h-0.5 w-4 rounded bg-[var(--text-soft)]" />
        <span className="h-0.5 w-4 rounded bg-[var(--text-soft)]" />
      </button>

      <nav
        ref={navigationRef}
        id="main-navigation"
        className={`${menuOpen ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col items-stretch gap-0 border border-t-0 border-[var(--line)] bg-[var(--surface)] px-[clamp(18px,4vw,64px)] pb-4 pt-2 shadow-[0_18px_28px_#0005] min-[1025px]:static min-[1025px]:ml-auto min-[1025px]:flex min-[1025px]:flex-row min-[1025px]:items-center min-[1025px]:gap-[clamp(14px,1.5vw,24px)] min-[1025px]:border-0 min-[1025px]:bg-transparent min-[1025px]:p-0 min-[1025px]:shadow-none`}
        aria-label="Main navigation"
      >
        {navigation.map(([label, href]) => (
          <Link className="border-b border-[var(--line)] py-[13px] text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--text)] min-[1025px]:border-0 min-[1025px]:py-0 min-[1025px]:text-[14px]" key={label} href={href} onClick={() => setMenuOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="mt-2 flex justify-center rounded border border-[#5578ed] bg-[#5578ed] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#6687f8] min-[1025px]:mt-0 min-[1025px]:px-[18px] min-[1025px]:py-3" href="/#contact" onClick={() => setMenuOpen(false)}>
          Let’s talk <span className="ml-1.5 text-[#dbe4ff]" aria-hidden="true">↗</span>
        </Link>
      </nav>

      <button
        className="ml-[18px] grid h-12 w-12 shrink-0 place-items-center rounded-full border border-[var(--line-bright)] bg-[var(--surface)] text-[19px] text-[var(--text-soft)] transition hover:rotate-12 hover:border-[#627ba8] hover:bg-[var(--surface-raised)] max-[1024px]:ml-2.5 max-[1024px]:h-10 max-[1024px]:w-10"
        type="button"
        onClick={toggleTheme}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        aria-pressed={theme === "light"}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        <span aria-hidden="true">{theme === "dark" ? "☾" : "☼"}</span>
      </button>
    </header>
  );
}
