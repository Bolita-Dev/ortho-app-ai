import React, { ReactElement } from 'react';
import Image from 'next/image';
import { getCorrectionMessage } from '../utils/utils';

interface Props {
  successPercentage: number;
  errorCount: number;
}

const ResultsCard = ({ successPercentage, errorCount }: Props) => {
  return (
    <div className="flex w-full gap-4 overflow-hidden rounded-xl border border-slate-300 pr-4 text-sm text-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
      <div className="h-24 w-28 overflow-hidden object-cover">
        <Image
          src="/duo.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </div>
      <div className="flex flex-1 flex-wrap">
        <div className="percentage flex flex-1 flex-col justify-center">
          <p className="flex justify-center text-4xl font-bold">
            {successPercentage}%
          </p>
          <p className="flex justify-center">correcto</p>
        </div>
        <div className="errors flex flex-1 flex-col justify-center">
          <p className="flex justify-center text-4xl font-bold">{errorCount}</p>
          <p className="flex justify-center">
            {errorCount === 1 ? 'error' : 'errores'}
          </p>
        </div>
      </div>
      <p className="flex flex-1 items-center justify-center gap-2 text-base italic">
        {getCorrectionMessage(successPercentage)}
      </p>
    </div>
  );
};

export default ResultsCard;
