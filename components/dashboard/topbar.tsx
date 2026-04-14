import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GlobeIcon, SearchIcon, SunIcon } from "@/components/icons";

export function Topbar({ onAdd }: { onAdd: () => void }) {
  return (
    <header className="topbar">
      <div className="searchbox">
        <SearchIcon />
        <Input placeholder="Search..." aria-label="Search" />
        <kbd>⌘ K</kbd>
      </div>

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
  );
}
