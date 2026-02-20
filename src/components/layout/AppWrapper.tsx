import { useState } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

interface AppWrapperProps {
  children: React.ReactNode;
}

export default function AppWrapper({ children }: AppWrapperProps) {
  const [showLoading, setShowLoading] = useState(true);
  const [hideContent, setHideContent] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    
    setTimeout(() => {
      setHideContent(false);
    }, 100);
  };

  return (
    <>
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div style={{ opacity: hideContent ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        {children}
      </div>
    </>
  );
}
