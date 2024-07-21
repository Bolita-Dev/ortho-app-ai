'use client';

import { useState } from 'react';
import Card from './components/Card';
import CorrectionsList from './components/CorrectionsList';
import { GeneratedResponse } from './interfaces';
import Form from './components/Form';

export default function Home() {
  const [generated, setGenerated] = useState({} as GeneratedResponse);

  const { original, corrected, corrections } = generated;

  const setGeneratedResponse = (response: GeneratedResponse) => {
    setGenerated(response);
  };
  return (
    <main className="h-screen bg-slate-900 p-4">
      <div className="flex flex-col items-center gap-4">
        <Form setGeneratedResponse={setGeneratedResponse} />
        {/* <div className="flex w-full max-w-3xl">
          <ResultsCard />
        </div> */}
        {corrected && (
          <div className="flex w-full max-w-3xl gap-4">
            <Card>
              <div className="mb-2 dark:text-slate-500">
                <span className="text-sm">Texto corregido</span>
              </div>
              <p className="text-m text-pretty text-slate-700 dark:text-slate-300">
                {corrected}
                {/* <span className="text-red-600 cursor-pointer">caffeine</span> */}
              </p>
            </Card>

            <Card>
              <div className="mb-2 dark:text-slate-500">
                <span className="text-sm">Texto original</span>
              </div>

              <p className="text-m text-pretty text-slate-700 dark:text-slate-300">
                {original}
                {/* <span className="text-green-600 cursor-pointer">computers</span> */}
              </p>
            </Card>
          </div>
        )}

        {corrected && (
          <div className="mt-4 flex w-full max-w-3xl">
            <CorrectionsList />
          </div>
        )}
      </div>
    </main>
  );
}
