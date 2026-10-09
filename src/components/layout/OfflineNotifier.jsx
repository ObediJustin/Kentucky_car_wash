import React, { useState, useEffect } from 'react';
import { WifiOff } from 'lucide-react';

export default function OfflineNotifier() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '0',
      left: '0',
      right: '0',
      backgroundColor: '#E11D48',
      color: '#FFFFFF',
      padding: '0.5rem 1rem',
      textAlign: 'center',
      zIndex: 99999,
      fontFamily: 'var(--font-heading)',
      fontSize: '0.9rem',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
    }}>
      <WifiOff size={18} />
      <span>Mode Hors Ligne Activé — Kentucky Car Wash reste disponible grâce au cache PWA</span>
    </div>
  );
}
