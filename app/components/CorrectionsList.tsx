import React, { ReactElement } from 'react';
import { Correction } from '../interfaces';
import Link from 'next/link';

const CorrectionsList = ({ corrections }: { corrections: Correction[] }) => {
  return (
    <div className="flex w-full flex-col divide-y divide-slate-700 overflow-hidden">
      {corrections.map((correction, index) => (
        <div className="py-3" key={index}>
          <div
            className="flex items-center gap-1 sm:gap-2"
            key={correction.correctedWord}>
            <div>
              <span className="inline-flex w-fit cursor-pointer overflow-hidden rounded-xl border border-red-600 bg-white text-sm font-medium text-red-600 dark:border-red-600 dark:bg-slate-900 dark:text-red-600">
                <span className="bg-red-600/10 px-2 py-1 dark:bg-red-600/10">
                  {correction.originalWord}
                </span>
              </span>
            </div>
            <div className="flex">
              <p className="text-slate-700 dark:text-slate-500">--{'>'}</p>
            </div>
            <div>
              <span className="inline-flex w-fit cursor-pointer overflow-hidden rounded-xl border border-green-600 bg-white text-sm font-medium text-green-600 dark:border-green-600 dark:bg-slate-900 dark:text-green-600">
                <span className="bg-green-600/10 px-2 py-1 dark:bg-green-600/10">
                  {correction.correctedWord}
                </span>
              </span>
            </div>
            <div className="ml-2 hidden overflow-hidden text-sm text-slate-700 sm:flex sm:flex-1 dark:text-slate-300">
              {correction.errorExplanation}
            </div>
            <div className="flex flex-1 justify-end sm:flex-none">
              <Link
                href={'https://dle.rae.es/' + correction.correctedWord}
                target="_blank"
                className="cursor-pointer whitespace-nowrap rounded-xl bg-slate-100 px-4 py-2 text-center text-xs font-medium tracking-wide text-black transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-slate-800 dark:text-slate-300 dark:focus-visible:outline-slate-800">
                RAE
              </Link>
            </div>
          </div>
          <div className="mt-2 overflow-hidden text-sm text-slate-700 sm:hidden dark:text-slate-300">
            {correction.errorExplanation}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CorrectionsList;
