import React from 'react';

interface Props {
  message: string;
  type?: 'success' | 'error';
}
const Toast = ({ message, type = 'success' }: Props) => {
  const isError = type === 'error';
  return (
    <div
      className={`animate-slide-in fixed bottom-4 right-4 overflow-hidden rounded-xl text-slate-700 dark:bg-slate-900 dark:text-slate-300`}
      role="alert">
      <div
        className={`flex w-full items-center gap-2 ${
          isError ? 'bg-red-600/10' : 'bg-green-600/10'
        } p-4`}>
        <div
          className={`rounded-full p-1 ${
            isError
              ? 'bg-red-600/15 text-red-600'
              : 'bg-green-600/15 text-green-600'
          }`}
          aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-6"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-2">
          <h3
            className={`text-sm font-semibold ${
              isError ? 'text-red-600' : 'text-green-600'
            }`}>
            <span className="sr-only">{isError ? 'Error' : 'Success'}</span>
          </h3>
          <p className="text-xs font-medium sm:text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default Toast;
