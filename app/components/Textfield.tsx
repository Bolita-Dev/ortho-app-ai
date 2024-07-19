import React from "react";

const Textfield = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden border-slate-300 bg-slate-100 text-slate-700 rounded-xl border dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      <div className="p-2">
        <p
          id="promptLabel"
          className="pb-1 pl-2 text-sm font-bold text-slate-700 opacity-60 dark:text-slate-300">
          Prompt
        </p>
        <p
          className="scroll-on max-h-44 w-full overflow-y-auto px-2 py-1 focus:outline-none"
          role="textbox"
          aria-labelledby="promptLabel"
          /*      onPaste={handlePaste}
          ref={promptTextInputRef} */
          contentEditable></p>
        <textarea
          name="promptText"
          /* ref={promptTextRef}  */ hidden></textarea>
      </div>
      <div className="flex w-full items-center px-2.5 py-2">
        <button
          type="button"
          className="ml-auto flex cursor-pointer items-center gap-2 whitespace-nowrap bg-blue-700 px-4 py-2 text-center text-xs font-medium tracking-wide text-slate-100 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-blue-600 dark:text-slate-100 dark:focus-visible:outline-blue-600 rounded-xl"
          /*  onClick={handleClick} */
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="size-3"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
              clipRule="evenodd"
            />
          </svg>
          Generate
        </button>
      </div>
    </div>
  );
};

export default Textfield;
