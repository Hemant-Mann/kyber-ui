"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "../lib/cn";
import type { KitNavItem, KitNavSection } from "../types";

function isItemActive(pathname: string, item: KitNavItem) {
  if (!item.href || item.href === "#" || item.external) return false;
  if (item.href === "/") return pathname === "/";
  return pathname.startsWith(item.href);
}

// The rail scrolls, so its tooltip is position: fixed; this pins it to the hovered/focused item.
function placeTip(event: { currentTarget: HTMLElement }) {
  const el = event.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--tip-y", `${rect.top + rect.height / 2}px`);
  el.style.setProperty("--tip-x", `${rect.right + 10}px`);
}

function NavItemLink({ item, collapsed, active }: { item: KitNavItem; collapsed: boolean; active: boolean }) {
  const tip = collapsed ? { onMouseEnter: placeTip, onFocus: placeTip } : {};
  const content = (
    <>
      <span className="nav-item__icon">{item.icon}</span>
      {/* Collapsed: the label stays in the DOM and shows as a tooltip on hover/focus. */}
      <span className={cn("nav-item__label", collapsed && "nav-item__tip")}>{item.label}</span>
    </>
  );

  if (!item.href || item.href === "#") {
    return (
      <button type="button" className={cn("nav-item", active && "is-active")} aria-label={item.label} {...tip}>
        {content}
      </button>
    );
  }

  if (item.external) {
    return (
      <a className={cn("nav-item", active && "is-active")} href={item.href} target="_blank" rel="noreferrer" aria-label={item.label} {...tip}>
        {content}
      </a>
    );
  }

  return (
    <Link className={cn("nav-item", active && "is-active")} href={item.href} aria-label={item.label} {...tip}>
      {content}
    </Link>
  );
}

export function SidebarNav({
  sections,
  collapsed,
  onToggle,
  brand = "Vexly",
}: {
  sections: KitNavSection[];
  collapsed: boolean;
  onToggle: () => void;
  brand?: string;
}) {
  const pathname = usePathname();

  return (
    <aside className={cn("sidebar", collapsed && "is-collapsed")}>
      <div className="sidebar__brand-row">
        <button type="button" className="sidebar__avatar" aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"} onClick={onToggle}>
          <span />
        </button>
        {!collapsed ? <span className="sidebar__brand">{brand}</span> : null}
      </div>

      <div className="sidebar__scroll">
        {sections.map((section) => (
          <section className="sidebar__section" key={section.label}>
            {!collapsed ? <h4>{section.label}</h4> : null}
            <div className="sidebar__group">
              {section.items.map((item) => (
                <NavItemLink key={item.label} item={item} collapsed={collapsed} active={isItemActive(pathname, item)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
