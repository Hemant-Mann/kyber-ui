"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Input } from "../ui/input";
import { LogOutIcon, MonitorIcon, MoonIcon, SearchIcon, SunIcon, UserIcon } from "../icons";
import { cn } from "../lib/cn";
import { applyThemeMode, getStoredThemeMode, THEME_STORAGE_KEY, type ThemeMode } from "../lib/theme";
import type { KitNavSection } from "../types";

export function DashboardTopbar({
  searchSections,
  modeLabel = "Demo Mode",
  primaryActionLabel = "Get started",
  onPrimaryAction,
}: {
  searchSections: KitNavSection[];
  modeLabel?: string;
  primaryActionLabel?: string;
  onPrimaryAction: () => void;
}) {
  const themeMenuRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const [userOpen, setUserOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [themeMode, setThemeMode] = useState<ThemeMode>("system");
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    return searchSections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) => item.label.toLowerCase().includes(trimmed)),
      }))
      .filter((section) => section.items.length > 0);
  }, [query, searchSections]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
        setThemeOpen(false);
        setUserOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  useEffect(() => {
    const initialMode = getStoredThemeMode();
    setThemeMode(initialMode);
    applyThemeMode(initialMode);
  }, []);

  useEffect(() => {
    applyThemeMode(themeMode);
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode);
  }, [themeMode]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onMediaChange = () => {
      if (themeMode === "system") applyThemeMode("system");
    };
    media.addEventListener("change", onMediaChange);
    return () => media.removeEventListener("change", onMediaChange);
  }, [themeMode]);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      if (!themeMenuRef.current?.contains(event.target as Node)) {
        setThemeOpen(false);
      }
      if (!userMenuRef.current?.contains(event.target as Node)) {
        setUserOpen(false);
      }
    };
    window.addEventListener("mousedown", onMouseDown);
    return () => window.removeEventListener("mousedown", onMouseDown);
  }, []);

  const themeLabel = themeMode[0].toUpperCase() + themeMode.slice(1);
  const themeIcon = themeMode === "dark" ? <MoonIcon /> : themeMode === "light" ? <SunIcon /> : <MonitorIcon />;

  return (
    <>
      <header className="topbar">
        <button type="button" className="searchbox" aria-label="Open search" onClick={() => setSearchOpen(true)}>
          <SearchIcon />
          <span className="searchbox__placeholder">Search...</span>
          <kbd>⌘ K</kbd>
        </button>

        <div className="topbar__actions">
          <div className="theme-menu" ref={themeMenuRef}>
            <button type="button" className="icon-btn" aria-label={`Theme: ${themeLabel}`} onClick={() => setThemeOpen((prev) => !prev)}>
              {themeIcon}
            </button>
            {themeOpen ? (
              <div className="theme-menu__panel kyb-fade-up" role="menu">
                <button type="button" className={cn("theme-menu__item", themeMode === "light" && "is-active")} onClick={() => { setThemeMode("light"); setThemeOpen(false); }}>
                  <SunIcon />
                  <span>Light</span>
                </button>
                <button type="button" className={cn("theme-menu__item", themeMode === "dark" && "is-active")} onClick={() => { setThemeMode("dark"); setThemeOpen(false); }}>
                  <MoonIcon />
                  <span>Dark</span>
                </button>
                <button type="button" className={cn("theme-menu__item", themeMode === "system" && "is-active")} onClick={() => { setThemeMode("system"); setThemeOpen(false); }}>
                  <MonitorIcon />
                  <span>System</span>
                </button>
              </div>
            ) : null}
          </div>

          <div className="theme-menu" ref={userMenuRef}>
            <button type="button" className="icon-btn" aria-label="Account" aria-expanded={userOpen} onClick={() => setUserOpen((prev) => !prev)}>
              <UserIcon />
            </button>
            {userOpen ? (
              <div className="theme-menu__panel kyb-fade-up" role="menu">
                {modeLabel ? <p className="theme-menu__note">{modeLabel}</p> : null}
                <button type="button" role="menuitem" className="theme-menu__item" onClick={() => { setUserOpen(false); onPrimaryAction(); }}>
                  <LogOutIcon />
                  <span>{primaryActionLabel}</span>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </header>

      {searchOpen ? (
        <div className="search-dialog-backdrop" role="dialog" aria-modal onClick={() => setSearchOpen(false)}>
          <div className="search-dialog kyb-fade-up" onClick={(event) => event.stopPropagation()}>
            <div className="search-dialog__input">
              <SearchIcon />
              <Input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search features..."
                aria-label="Search features"
                className="search-dialog__field"
              />
            </div>

            <div className="search-dialog__list">
              {filteredSections.length ? (
                filteredSections.map((section) => (
                  <section className="search-dialog__group" key={section.label}>
                    <h4 className="search-dialog__heading">{section.label}</h4>
                    {section.items.map((item) =>
                      item.href && item.href !== "#" ? (
                        item.external ? (
                          <a
                            key={item.label}
                            className="search-dialog__item"
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            onClick={() => setSearchOpen(false)}
                          >
                            <span className="search-dialog__item-icon">{item.icon}</span>
                            <span>{item.label}</span>
                          </a>
                        ) : (
                          <Link key={item.label} className="search-dialog__item" href={item.href} onClick={() => setSearchOpen(false)}>
                            <span className="search-dialog__item-icon">{item.icon}</span>
                            <span>{item.label}</span>
                          </Link>
                        )
                      ) : (
                        <button type="button" key={item.label} className="search-dialog__item" onClick={() => setSearchOpen(false)}>
                          <span className="search-dialog__item-icon">{item.icon}</span>
                          <span>{item.label}</span>
                        </button>
                      ),
                    )}
                  </section>
                ))
              ) : (
                <p className="search-dialog__empty">No results found.</p>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
