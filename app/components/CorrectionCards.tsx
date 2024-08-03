import React from 'react';
import { GeneratedResponse } from '@/app/interfaces';
import { CopyToClipBoard, Card } from '@/app/components';

const CorrectionCards = ({
  originalText,
  corrections,
  correctedText,
}: GeneratedResponse) => {
  const correctWord = (word: string) =>
    word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  return (
    <div className="flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
      <Card>
        <div className="mb-2 dark:text-slate-500">
          <span className="text-sm">Texto original</span>
        </div>

        <p className="text-m text-pretty text-slate-700 dark:text-slate-300">
          {originalText.split(' ').map((word, index) => {
            const cleanWord = correctWord(word);
            const isCorrected = corrections.some(
              correction => correctWord(correction.originalWord) === cleanWord
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
              correction => correctWord(correction.correctedWord) === cleanWord
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
  );
};

export default CorrectionCards;
