"use client";

import Image from "next/image";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function ThreadsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
      <Image
        src="/threads.png"
        alt="Threads"
        width={20}
        height={20}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

export function SocialLinks({ className = "flex items-center gap-3", iconClassName = "w-8 h-8" }: SocialLinksProps) {
  const socials = [
    {
      name: "Instagram",
      href: "https://instagram.com/benuagreenenergy",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
    },
    {
      name: "Threads",
      href: "https://threads.net/@benuagreenenergy",
      icon: <ThreadsIcon className="w-4 h-4" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/benuagreen",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@benuagreenenergy",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
          <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/6281234567890?text=Halo%20Benua%20Green%20Energy",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
    },
  ];

  return (
    <div className={className}>
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          title={s.name}
          aria-label={s.name}
          className={`${iconClassName} rounded-full border border-neutral-200 bg-white hover:bg-neutral-900 text-neutral-700 hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm hover:border-neutral-900 group cursor-pointer`}
        >
          <span className="transition-transform duration-200 group-hover:scale-110 flex items-center justify-center">
            {s.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
