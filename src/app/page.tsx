'use client';

import dynamic from 'next/dynamic';

// Leaflet needs the browser; disable SSR for this component
const MapLeaflet = dynamic(() => import('./components/LeafletMap'), { ssr: false });

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl p-4 space-y-6">
      <h1 className="text-center text-3xl md:text-5xl font-extrabold">
        Welcome to FindCheapVacation
      </h1>

      <div className="h-[60vh] w-full overflow-hidden rounded-2xl border">
        <MapLeaflet />
      </div>
    </main>
  );
}
