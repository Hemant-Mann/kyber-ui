import type { HTMLAttributes } from "react";
import { cn } from "../lib/cn";

type AvatarProps = HTMLAttributes<HTMLDivElement> & {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg";
};

export function Avatar({ src, alt = "Avatar", initials, size = "md", className, ...props }: AvatarProps) {
  return (
    <div className={cn("kyb-avatar", `is-${size}`, className)} {...props}>
      {src ? <img src={src} alt={alt} className="kyb-avatar__image" /> : <span className="kyb-avatar__fallback">{initials ?? "U"}</span>}
    </div>
  );
}
