'use client';

import { useState } from 'react';
import Card from './components/Card';
import CorrectionsList from './components/CorrectionsList';
import { GeneratedResponse } from './interfaces';
import Form from './components/Form';
import ResultsCard from './components/ResultsCard';

export default function Home() {
  const [generated, setGenerated] = useState({} as GeneratedResponse);
  console.log(generated);

  const { originalText, correctedText, corrections } = generated;

  const setGeneratedResponse = (response: GeneratedResponse) => {
    setGenerated(response);
  };
  return (
    <main>
      <div className="flex flex-col items-center gap-4">
        <Form setGeneratedResponse={setGeneratedResponse} />
        <div className="flex w-full max-w-3xl">
          <ResultsCard />
        </div>

        {correctedText && (
          <div className="flex w-full max-w-3xl gap-4">
            <Card>
              <div className="mb-2 dark:text-slate-500">
                <span className="text-sm">Texto original</span>
              </div>

              <p className="text-m text-pretty text-slate-700 dark:text-slate-300">
                {originalText}
                {/* <span className="text-green-600 cursor-pointer">computers</span> */}
              </p>
            </Card>
            <Card>
              <div className="mb-2 dark:text-slate-500">
                <span className="text-sm">Texto corregido</span>
              </div>
              <p className="text-m text-pretty text-slate-700 dark:text-slate-300">
                {correctedText}
                {/* <span className="text-red-600 cursor-pointer">caffeine</span> */}
              </p>
            </Card>
          </div>
        )}

        {correctedText && (
          <div className="mt-4 flex w-full max-w-3xl">
            <CorrectionsList corrections={corrections} />
          </div>
        )}
      </div>
    </main>
  );
}
