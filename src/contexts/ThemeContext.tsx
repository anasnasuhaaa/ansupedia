'use client';

import { ReactNode, useEffect } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Always apply dark mode
    const htmlElement = document.documentElement;
    htmlElement.classList.add('dark');
  }, []);

  return <>{children}</>;
}
