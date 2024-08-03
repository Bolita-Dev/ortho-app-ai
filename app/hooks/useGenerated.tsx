import { useEffect, useState } from 'react';
import { GeneratedResponse } from '@/app/interfaces';

const useGenerated = () => {
  const [generated, setGenerated] = useState({} as GeneratedResponse);
  const [loadingGeneratedContent, setLoadingGeneratedContent] = useState(false);
  const hasGeneratedContent = Object.keys(generated).length > 0;

  const setGeneratedResponse = (response: GeneratedResponse) => {
    setGenerated(response);
  };

  useEffect(() => {
    if (loadingGeneratedContent) {
      setGenerated({} as GeneratedResponse);
    }
  }, [loadingGeneratedContent]);

  return {
    generated,
    setGeneratedResponse,
    loadingGeneratedContent,
    setLoadingGeneratedContent,
    hasGeneratedContent,
  };
};

export default useGenerated;
