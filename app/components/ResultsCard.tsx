import React, { ReactElement } from 'react';
import Image from 'next/image';

const ResultsCard = ({
  children,
}: {
  children?: ReactElement | ReactElement[];
}) => {
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
          <p className="flex justify-center text-4xl font-bold">35%</p>
          <p className="flex justify-center">correcto</p>
        </div>
        <div className="errors flex flex-1 flex-col justify-center">
          <p className="flex justify-center text-4xl font-bold">5</p>
          <p className="flex justify-center">errores</p>
        </div>
      </div>
      <p className="flex flex-1 items-center justify-center gap-2 text-base italic">
        ¡Esto necesita una intervención urgente! ¡Llamen a los lingüistas!
      </p>
    </div>
  );
};

export default ResultsCard;
