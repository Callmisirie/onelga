"use client";

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import NavbarAuth from "./NavbarAuth";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center font-mono tracking-wider">
      <Navbar className="top-2" />
    </div>
  );
}

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("inset-x-0 max-w-2xl mx-auto z-50 w-full", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Tracks">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/">Constructs</HoveredLink>
            <HoveredLink href="/">Roadmap</HoveredLink>
          </div>
        </MenuItem>
        <NavbarAuth />
      </Menu>  
    </div>
  );
}
