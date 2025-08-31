'use client';

import React from 'react';

export function ScrollHandler({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return React.cloneElement(children as React.ReactElement<{ isScrolled: boolean }>, { isScrolled });
}
