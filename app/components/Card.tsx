import React, { ReactElement } from 'react';

const Card = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <div className="relative flex-1 rounded-xl border border-slate-700 bg-slate-800 p-4">
      {children}
    </div>
  );
};

export default Card;
