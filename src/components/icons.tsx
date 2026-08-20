type IconProps = { className?: string };

const base = "h-6 w-6";

export function IconTarget({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconWorkflow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="5" height="5" rx="1.2" />
      <rect x="16" y="4" width="5" height="5" rx="1.2" />
      <rect x="9.5" y="15" width="5" height="5" rx="1.2" />
      <path d="M8 6.5h4.5c1.7 0 2.5 1 2.5 2.3v1M16 6.5h-2M12 15v-3.5" />
    </svg>
  );
}

export function IconBot({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="5" y="8" width="14" height="11" rx="4" />
      <path d="M12 8V5" />
      <circle cx="12" cy="3.6" r="1.1" fill="currentColor" stroke="none" />
      <circle cx="9.5" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="13.5" r="1.2" fill="currentColor" stroke="none" />
      <path d="M9.5 16.5h5" />
      <path d="M3 12v3M21 12v3" />
    </svg>
  );
}

export function IconLayout({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17" />
      <path d="M8 9.5V20" />
    </svg>
  );
}

export function IconMegaphone({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10v4a1.5 1.5 0 0 0 1.5 1.5H7l4.5 3.5v-13L7 9.5H5.5A1.5 1.5 0 0 0 4 10Z" />
      <path d="M15 9.5a4 4 0 0 1 0 5.4M18 7.5a7.5 7.5 0 0 1 0 9.4" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15 9l-2 5-4 1.5 2-5.5 4-1z" />
    </svg>
  );
}

export function IconArrowUpRight({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? "h-4 w-4"} stroke="currentColor" strokeWidth="1.8">
      <path d="M7 17 17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsapp({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className ?? base} fill="currentColor">
      <path d="M12 2.2a9.8 9.8 0 0 0-8.4 14.8L2.2 21.8l4.9-1.3A9.8 9.8 0 1 0 12 2.2Zm0 1.7a8.1 8.1 0 0 1 6.9 12.3l-.2.4.9 3.3-3.4-.9-.4.2A8.1 8.1 0 1 1 12 3.9Zm-3.2 3.9c-.2 0-.5 0-.6.3-.2.3-.8.8-.8 1.9s.8 2.2.9 2.4c.1.1 1.6 2.6 4 3.6 2 .9 2.4.7 2.8.6.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3-.3-.2-1.5-.8-1.8-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.1-.3.2-.6 0-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.6-1.5-1.8-.1-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4Z" />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 5.5h16v10H10l-4 3.5v-3.5H4Z" />
      <path d="M8 10h8M8 13h5" />
    </svg>
  );
}

export function IconCart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M3.5 4.5h2l2 11h10l1.7-7.5H6.2" />
      <circle cx="9.5" cy="19" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="16" cy="19" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconChart({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M4 20V4M4 20h16" />
      <path d="M7.5 16l3-3.5 2.7 2 4.3-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4.5 7l7.5 6 7.5-6" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <path d="M12 3.5 5 6v5.5c0 4.5 3 7.7 7 9.0 4-1.3 7-4.5 7-9V6l-7-2.5Z" />
      <path d="M9 12l2 2 4-4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconServer({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <rect x="4" y="4.5" width="16" height="6" rx="1.5" />
      <rect x="4" y="13.5" width="16" height="6" rx="1.5" />
      <circle cx="7.3" cy="7.5" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="7.3" cy="16.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconUsers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className ?? base} stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <path d="M16 9a2.5 2.5 0 1 0 0-5" />
      <path d="M15 14.2c2.4.4 4 2.1 4 4.8" />
    </svg>
  );
}
