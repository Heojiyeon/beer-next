'use client';

import { useEffect, useState } from 'react';

export function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches);
  }, []);

  if (isStandalone || !isIOS) {
    return null;
  }

  return (
    <div className="max-w-[400px] flex flex-col items-center justify-center mb-10 border border-text-card-defaultBorder rounded-md">
      <p className="text-[12px] w-full m-2 p-2 text-center text-card-description">
        <span className="font-semibold mb-2">* Install PWA Guide</span>
        <br />
        To install this app on your iOS device, <br /> tap the share button
        <span
          role="img"
          aria-label="share icon"
          className="border rounded-full p-[0.2px] bg-slate-100 mx-1"
        >
          ⎋
        </span>
        and then "Add to Home Screen"
        <span
          role="img"
          aria-label="plus icon"
          className="border rounded-full p-[0.2px] bg-slate-100 mx-1"
        >
          ➕
        </span>
        .
      </p>
    </div>
  );
}
