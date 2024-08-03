import React, { useRef, useState } from 'react';
import { useToast } from '@/app/context/ToastContext';
import { GeneratedResponse } from '@/app/interfaces';
import { getCorrections } from '@/app/lib/actions';

interface Props {
  setGeneratedResponse: (result: GeneratedResponse) => void;
  setLoading: (loading: boolean) => void;
  loading: boolean;
}
const Form = ({ setGeneratedResponse, setLoading, loading }: Props) => {
  const { showToast } = useToast();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const apiKeyRef = useRef<HTMLInputElement>(null);
  const [apiKeyError, setApiKeyError] = useState<boolean>(false);

  const [wordCount, setWordCount] = useState<number>(0);
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = textAreaRef.current;

    if (!textarea) return;

    const maxLines = 8;
    const lineHeight = parseFloat(getComputedStyle(textarea).lineHeight);
    const maxHeight = `${maxLines * lineHeight}px`;

    setWordCount(event.target.value.trim().split(/\s+/).filter(Boolean).length);

    textarea.style.height = 'auto'; // Reset height in case the user deletes content
    textarea.style.height = `${textarea.scrollHeight}px`;

    if (textarea.scrollHeight > maxLines * lineHeight) {
      textarea.style.height = maxHeight;
      textarea.style.overflowY = 'auto';
    } else {
      textarea.style.overflowY = 'hidden';
    }
  };

  const handleApiKeyError = () => {
    setApiKeyError(true);
    apiKeyRef.current?.focus();
  };

  const handleGetCorrections = async () => {
    const apiKey = apiKeyRef.current?.value;
    const text = textAreaRef.current?.value;

    if (!apiKey) return handleApiKeyError();
    if (!text) return;

    setLoading(true);
    const result = await getCorrections({ apiKey, originalText: text });

    switch (result?.type) {
      case 'success':
        setGeneratedResponse(result.generated);
        textAreaRef.current.value = '';
        setWordCount(0);
        break;
      case 'unknown-error':
        showToast('¡Introduce una API Key válida!');
        handleApiKeyError();
        break;
      default:
        showToast('Ha habido un error, inténtalo de nuevo');
    }

    setLoading(false);
  };
  return (
    <form className="flex w-full max-w-3xl flex-col gap-4">
      <input
        ref={apiKeyRef}
        type="password"
        id="passwordInput"
        className={`${apiKeyError ? 'focus-visible:outline-red-700' : 'focus-visible:outline-blue-600'} w-full rounded-xl px-6 py-4 text-white focus-visible:outline focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-75 dark:border-slate-700 dark:bg-slate-800/50`}
        name="apiKey"
        autoComplete="current-password"
        placeholder="Introduce tu API Key de Gemini"
        onChange={() => setApiKeyError(false)}
      />
      <div className="flex w-full flex-col overflow-hidden rounded-xl border border-slate-300 text-slate-700 has-[textarea:focus]:outline has-[textarea:focus]:outline-2 has-[textarea:focus]:outline-blue-700 dark:border-slate-700 dark:text-slate-300">
        <div className="bg-slate-100/50 p-2 dark:bg-slate-800/50">
          <textarea
            ref={textAreaRef}
            className="text-m w-full resize-none bg-transparent p-4 focus:outline-none"
            name="originalText"
            rows={2}
            placeholder="Escribe o pega aquí la frase a revisar..."
            onInput={handleInput}
          />
        </div>
        <div className="flex w-full items-center justify-between border-t border-slate-300 bg-slate-100 py-2 pl-6 pr-2 dark:border-slate-700 dark:bg-slate-800">
          <button
            type="button"
            className="ml-auto flex cursor-pointer items-center gap-2 whitespace-nowrap rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-2 py-2 text-center text-sm font-medium tracking-wide text-slate-100 transition hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 active:opacity-100 active:outline-offset-0 disabled:cursor-not-allowed disabled:opacity-75 dark:text-slate-100 dark:focus-visible:outline-blue-600"
            disabled={wordCount < 1 || loading}
            onClick={handleGetCorrections}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="size-4"
              aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
                clipRule="evenodd"
              />
            </svg>
            Revisar ortografía
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
