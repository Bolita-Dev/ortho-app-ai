import React from 'react';
import { GeneratedResponse } from '@/app/interfaces';
import { CopyToClipBoard, Card } from '@/app/components';
import { highlightWords } from '@/app/utils/utils';

const CorrectionCards = ({
  originalText,
  corrections,
  correctedText,
}: GeneratedResponse) => {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
      <Card>
        <div className="mb-2 text-slate-500">
          <span className="text-sm">Texto original</span>
        </div>

        <p
          className="text-m text-pretty text-slate-300"
          dangerouslySetInnerHTML={{
            __html: highlightWords(
              originalText,
              corrections.map(e => e.originalWord),
              'text-red-600'
            ),
          }}
        />
      </Card>
      <Card>
        <div className="mb-2 text-slate-500">
          <span className="text-sm">Texto corregido</span>
        </div>

        <p
          className="text-m text-pretty text-slate-300"
          dangerouslySetInnerHTML={{
            __html: highlightWords(
              correctedText,
              corrections.map(e => e.correctedWord),
              'text-green-600'
            ),
          }}
        />

        <div className="absolute right-2 top-2">
          <CopyToClipBoard textToCopy={correctedText} />
        </div>
      </Card>
    </div>
  );
};

export default CorrectionCards;
