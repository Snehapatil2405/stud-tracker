// components/Layout.jsx
import React, { useState, useEffect } from "react";

/**
 * Layout wraps Navbar + Sidebar + main content.
 * - header height assumed h-14 (56px). If your Navbar height differs, change --header-h variable below.
 * - sidebar width w-64 (256px). If you need different width, change md:pl-64 in main.
 */
export default function Layout({ children, Navbar, Sidebar }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // close mobile sidebar on route change or resize (simple)
    function onResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // close on Esc
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const NavbarComp = Navbar;
  const SidebarComp = Sidebar;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar (fixed at top) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavbarComp onOpenSidebar={() => setOpen(true)} />
      </div>

      {/* Mobile backdrop when sidebar open */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar — fixed below navbar on desktop, off-canvas on mobile */}
      <div
        className={`fixed top-14 bottom-0 left-0 z-50 w-64 bg-white border-r overflow-y-auto transform transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        aria-hidden={!open && window.innerWidth < 768}
      >
        <SidebarComp closeSidebar={() => setOpen(false)} />
      </div>

      {/* Main content: give top padding for navbar and left padding for sidebar on md+ */}
      <main className="pt-14 md:pl-64 min-h-screen">
        <div className="max-w-7xl mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}
