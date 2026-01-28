'use client';

import { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    // Register service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
    }

    // Listen for install prompt
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setShowInstall(false);
    }
    
    setDeferredPrompt(null);
  };

  if (!showInstall) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 bg-purple-900 text-white p-4 rounded-lg shadow-lg z-50 animate-slide-up">
      <button
        onClick={() => setShowInstall(false)}
        className="absolute top-2 right-2 p-1 hover:bg-purple-800 rounded"
      >
        <X className="w-4 h-4" />
      </button>
      
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg p-2">
          <img src="/logo.png" alt="DRW TRANS" className="w-full h-full object-contain" />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-sm mb-1">Install DRW TRANS</h3>
          <p className="text-xs text-purple-200 mb-3">
            Akses lebih cepat dengan install aplikasi di perangkat Anda
          </p>
          
          <button
            onClick={handleInstall}
            className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors w-full justify-center"
          >
            <Download className="w-4 h-4" />
            Install Sekarang
          </button>
        </div>
      </div>
    </div>
  );
}
