"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { NAV_SECTIONS } from "@/components/dashboard/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlobeIcon, SearchIcon, SunIcon } from "@/components/icons";

export function Topbar({ onAdd }: { onAdd: () => void }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filteredSections = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    return NAV_SECTIONS.map((section) => ({
      ...section,
      items: section.items.filter((item) => item.label.toLowerCase().includes(trimmed)),
    })).filter((section) => section.items.length > 0);
  }, [query]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
        return;
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  return (
    <>
      <header className="topbar">
        <button type="button" className="searchbox" aria-label="Open search" onClick={() => setSearchOpen(true)}>
          <SearchIcon />
          <span className="searchbox__placeholder">Search...</span>
          <kbd>⌘ K</kbd>
        </button>

        <div className="topbar__actions">
          <button type="button" className="icon-btn" aria-label="Language">
            <GlobeIcon />
          </button>
          <button type="button" className="icon-btn" aria-label="Theme">
            <SunIcon />
          </button>

          <div className="mode-pill">
            <span>Demo Mode</span>
            <Button variant="pill" onClick={onAdd}>
              Get started <span aria-hidden>→</span>
            </Button>
          </div>
        </div>
      </header>

      {searchOpen ? (
        <div className="search-dialog-backdrop" role="dialog" aria-modal onClick={() => setSearchOpen(false)}>
          <div className="search-dialog fade-up" onClick={(event) => event.stopPropagation()}>
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
                    <h4 className="search-dialog__heading">{section.label.toUpperCase()}</h4>
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
