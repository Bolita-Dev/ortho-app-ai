import React, { ReactElement } from 'react';

const Card = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <div className="relative flex-1 rounded-xl border border-slate-300 bg-slate-100 p-4 dark:border-slate-700 dark:bg-slate-800">
      {children}
    </div>
  );
};

export default Card;
