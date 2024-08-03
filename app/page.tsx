'use client';

import useGenerated from '@/app/hooks/useGenerated';
import { ToastProvider } from '@/app/context/ToastContext';
import { getSuccessPercentage } from '@/app/utils/utils';
import {
  CorrectionCards,
  CorrectionsList,
  Form,
  ResultsCard,
  Skeleton,
} from '@/app/components';

export default function Home() {
  const {
    generated,
    setGeneratedResponse,
    loadingGeneratedContent,
    setLoadingGeneratedContent,
    hasGeneratedContent,
  } = useGenerated();

  const { originalText, corrections } = generated;

  return (
    <ToastProvider>
      <div className="flex flex-grow flex-col items-center gap-4">
        <Form
          setGeneratedResponse={setGeneratedResponse}
          setLoading={setLoadingGeneratedContent}
          loading={loadingGeneratedContent}
        />

        {loadingGeneratedContent && <Skeleton />}
        {hasGeneratedContent && (
          <div className="flex w-full max-w-3xl flex-col gap-4">
            <ResultsCard
              successPercentage={getSuccessPercentage(
                generated?.corrections?.length,
                originalText
              )}
              errorCount={corrections?.length}
            />

            <CorrectionCards {...generated} />
            <CorrectionsList corrections={corrections} />
          </div>
        )}
      </div>
    </ToastProvider>
  );
}
