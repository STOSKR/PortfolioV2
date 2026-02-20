import { useState, createContext, useContext } from 'react';
import LoadingScreen from '@/components/ui/LoadingScreen';

interface AppWrapperProps {
  children: React.ReactNode;
}

const LoadingContext = createContext({ isLoading: true });

export const useLoadingState = () => useContext(LoadingContext);

export default function AppWrapper({ children }: AppWrapperProps) {
  const [showLoading, setShowLoading] = useState(true);
  const [hideContent, setHideContent] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
    setIsLoading(false);
    
    setTimeout(() => {
      setHideContent(false);
    }, 100);
  };

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {showLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      <div style={{ opacity: hideContent ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
}
