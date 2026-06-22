'use client';

import { trackContactChannelClick } from '../lib/analytics';

export function TrackedLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={href} className={className} onClick={() => trackContactChannelClick(label)}>
      {children}
    </a>
  );
}
