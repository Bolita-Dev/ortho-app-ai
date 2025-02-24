import React from 'react';
import { Card } from '@/app/components';

const Skeleton = () => {
  return (
    <div className="flex w-full max-w-3xl flex-col gap-4 sm:flex-row">
      <Card>
        <div className="flex w-full flex-col gap-2">
          <div
            className="h-3.5 w-full animate-pulse rounded-xl bg-slate-700"
            aria-hidden="true"></div>
          <div
            className="h-3.5 w-full animate-pulse rounded-xl bg-slate-700"
            aria-hidden="true"></div>
          <div
            className="h-3.5 w-full animate-pulse rounded-xl bg-slate-700"
            aria-hidden="true"></div>
          <div
            className="h-3.5 w-1/2 animate-pulse rounded-xl bg-slate-700"
            aria-hidden="true"></div>
          <span className="sr-only">cargando</span>
        </div>
      </Card>
      <Card>
        <div className="flex w-full flex-col gap-2">
          <div
            className="h-3.5 w-full animate-pulse rounded-xl bg-slate-700"
            aria-hidden="true"></div>
          <div
            className="h-3.5 w-full animate-pulse rounded-xl bg-slate-700"
            aria-hidden="true"></div>
          <div
            className="h-3.5 w-full animate-pulse rounded-xl bg-slate-700"
            aria-hidden="true"></div>
          <div
            className="h-3.5 w-1/2 animate-pulse rounded-xl bg-slate-700"
            aria-hidden="true"></div>
          <span className="sr-only">cargando</span>
        </div>
      </Card>
    </div>
  );
};

export default Skeleton;
