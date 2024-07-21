import React, { ReactElement } from 'react';

const ResultsCard = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}) => {
  return (
    <div className="results-box hols flex w-full gap-4 rounded-xl p-4 text-sm text-slate-100 dark:bg-blue-600 dark:text-slate-100">
      <div className="flex flex-1 flex-wrap">
        <div className="percentage flex flex-1 flex-col justify-center">
          <p className="flex justify-center text-4xl font-bold">35%</p>
          <p className="flex justify-center">correcto</p>
        </div>
        <div className="errors flex flex-1 flex-col justify-center">
          <p className="flex justify-center text-4xl font-bold">5</p>
          <p className="flex justify-center">errores</p>
        </div>
      </div>
      <p className="flex flex-1 gap-2 text-base italic">
        Houston, tenemos un problema ortográfico... ¡y no tenemos suficiente
        cinta adhesiva para arreglarlo!
      </p>
    </div>
  );
};

export default ResultsCard;
