import React, { ReactElement } from 'react';

const CorrectionsList = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}) => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <div className="error-item flex items-center gap-2">
        <div>
          <span className="inline-flex w-fit overflow-hidden rounded-xl border border-red-600 bg-white text-sm font-medium text-red-600 dark:border-red-600 dark:bg-slate-900 dark:text-red-600">
            <span className="bg-red-600/10 px-2 py-1 dark:bg-red-600/10">
              ermano
            </span>
          </span>
        </div>
        <div className="flex">
          <p className="text-slate-700 dark:text-slate-500">--{'>'}</p>
        </div>
        <div>
          <span className="inline-flex w-fit overflow-hidden rounded-xl border border-green-600 bg-white text-sm font-medium text-green-600 dark:border-green-600 dark:bg-slate-900 dark:text-green-600">
            <span className="bg-green-600/10 px-2 py-1 dark:bg-green-600/10">
              hermano
            </span>
          </span>
        </div>
        <div className="ml-2 flex-1 overflow-hidden text-ellipsis text-nowrap text-sm text-slate-700 dark:text-slate-300">
          Es un verbo que se usa principalmente como auxiliar en tiempos
          compuestos o para referirse a la existencia de algo.
        </div>
        <div>
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap rounded-xl bg-slate-100 px-4 py-2 text-center text-xs font-medium tracking-wide text-black transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-slate-800 dark:text-slate-300 dark:focus-visible:outline-slate-800">
            RAE
          </button>
        </div>
      </div>
      <div className="error-item flex items-center gap-2">
        <div>
          <span className="inline-flex w-fit overflow-hidden rounded-xl border border-red-600 bg-white text-sm font-medium text-red-600 dark:border-red-600 dark:bg-slate-900 dark:text-red-600">
            <span className="bg-red-600/10 px-2 py-1 dark:bg-red-600/10">
              komiendo
            </span>
          </span>
        </div>
        <div className="flex">
          <p className="text-slate-700 dark:text-slate-500">--{'>'}</p>
        </div>
        <div>
          <span className="inline-flex w-fit overflow-hidden rounded-xl border border-green-600 bg-white text-sm font-medium text-green-600 dark:border-green-600 dark:bg-slate-900 dark:text-green-600">
            <span className="bg-green-600/10 px-2 py-1 dark:bg-green-600/10">
              comiendo
            </span>
          </span>
        </div>
        <div className="ml-2 flex-1 overflow-hidden text-ellipsis text-nowrap text-sm text-slate-700 dark:text-slate-300">
          Ao para referirse a la existencia de algo.
        </div>
        <div>
          <button
            type="button"
            className="cursor-pointer whitespace-nowrap rounded-xl bg-slate-100 px-4 py-2 text-center text-xs font-medium tracking-wide text-black transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-100 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-slate-800 dark:text-slate-300 dark:focus-visible:outline-slate-800">
            RAE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CorrectionsList;
