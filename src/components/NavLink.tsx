import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "navbar" | "pill";

interface NavLinkPropsExtended
  extends Omit<NavLinkProps, "className"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  variant?: Variant;
}

const baseStyles =
  "transition-colors duration-200";

const variants: Record<Variant, string> = {
  default: "text-muted-foreground hover:text-foreground",
  navbar:
    "text-xs font-medium text-muted-foreground hover:text-foreground relative",
  pill:
    "px-3 py-1.5 rounded-lg text-sm bg-secondary text-muted-foreground hover:bg-muted",
};

const activeStyles: Record<Variant, string> = {
  default: "text-foreground",
  navbar: "text-foreground",
  pill: "bg-primary text-white",
};

const NavLink = forwardRef<HTMLAnchorElement, NavLinkPropsExtended>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      variant = "default",
      to,
      end,
      ...props
    },
    ref
  ) => {
    return (
      <RouterNavLink
        ref={ref}
        to={to}
        end={end}
        className={({ isActive, isPending }) =>
          cn(
            baseStyles,
            variants[variant],
            isActive && activeStyles[variant],
            isActive && activeClassName,
            isPending && pendingClassName,
            className
          )
        }
        data-active={({ isActive }: any) => isActive || undefined}
        {...props}
      />
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };