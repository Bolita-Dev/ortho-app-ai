'use client';

import { useState } from 'react';
import Card from './components/Card';
import CorrectionsList from './components/CorrectionsList';
import { GeneratedResponse } from './interfaces';
import Form from './components/Form';
import ResultsCard from './components/ResultsCard';
import { ToastProvider } from './context/ToastContext';
import { getSuccessPercentage } from './utils/utils';
import CopyToClipBoard from './components/CopyToClipBoard';
import Skeleton from './components/Skeleton';

export default function Home() {
  const [generated, setGenerated] = useState({} as GeneratedResponse);
  console.log(generated);

  const { originalText, correctedText, corrections } = generated;

  const setGeneratedResponse = (response: GeneratedResponse) => {
    setGenerated(response);
  };
  const correctWord = (word: string) =>
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');

  return (
    <ToastProvider>
      <div className="flex flex-col items-center gap-4">
        <Form setGeneratedResponse={setGeneratedResponse} />

        {originalText && (
          <div className="flex w-full max-w-3xl">
            <ResultsCard
              successPercentage={getSuccessPercentage(
                generated?.corrections?.length,
                originalText
              )}
              errorCount={corrections?.length}
            />
          </div>
        )}

        {!correctedText && <Skeleton />}

        {correctedText && (
          <div className="flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
            <Card>
              <div className="mb-2 dark:text-slate-500">
                <span className="text-sm">Texto original</span>
              </div>

              <p className="text-m text-pretty text-slate-700 dark:text-slate-300">
                {originalText.split(' ').map((word, index) => {
                  const cleanWord = correctWord(word);
                  const isCorrected = corrections.some(
                    correction =>
                      correctWord(correction.originalWord) === cleanWord
                  );
                  return (
                    <span
                      className={`text-m text-pretty ${isCorrected ? 'cursor-pointer text-red-600' : 'text-slate-700 dark:text-slate-300'}`}
                      key={index}>
                      {word}{' '}
                    </span>
                  );
                })}
              </p>
            </Card>
            <Card>
              <div className="mb-2 dark:text-slate-500">
                <span className="text-sm">Texto corregido</span>
              </div>
              <p className="text-m text-pretty text-slate-700 dark:text-slate-300">
                {correctedText.split(' ').map((word, index) => {
                  const cleanWord = correctWord(word);
                  const isCorrected = corrections.some(
                    correction =>
                      correctWord(correction.correctedWord) === cleanWord
                  );
                  return (
                    <span
                      className={`text-m text-pretty ${isCorrected ? 'cursor-pointer text-green-600' : 'text-slate-700 dark:text-slate-300'}`}
                      key={index}>
                      {word}{' '}
                    </span>
                  );
                })}
              </p>
              <div className="absolute right-2 top-2">
                <CopyToClipBoard textToCopy={correctedText} />
              </div>
            </Card>
          </div>
        )}

        {correctedText && (
          <div className="mt-4 flex w-full max-w-3xl">
            <CorrectionsList corrections={corrections} />
          </div>
        )}
      </div>
    </ToastProvider>
  );
}
