import React, { ReactElement } from 'react';

const Card = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <div className="rounded-xl flex-1 p-4 border border-slate-300 bg-slate-100 dark:border-slate-700 dark:bg-slate-800 ">
      {children}
    </div>
  );
};

export default Card;
