import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-paper2">
      <div className="max-w-[880px] mx-auto px-6 py-6 flex justify-between flex-wrap gap-2.5">
        <span className="font-mono text-[12.5px] text-muted">© {year} Andrea Dondoni</span>
        <span className="font-mono text-[12.5px] text-muted">built with react · gatsby · tailwind</span>
      </div>
    </footer>
  );
}
