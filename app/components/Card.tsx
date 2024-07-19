import React, { ReactElement } from "react";

const Card = ({ children }: { children: ReactElement | ReactElement[] }) => {
  return (
    <div className="w-full max-w-2xl border-slate-300 bg-slate-100 p-6 text-left dark:border-slate-700 dark:bg-slate-800 rounded-xl border">
      {children}
    </div>
  );
};

export default Card;
