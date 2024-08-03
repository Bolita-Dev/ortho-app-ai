import { useToast } from '@/app/context/ToastContext';

interface Props {
  textToCopy: string;
}
const CopyToClipBoard = ({ textToCopy }: Props) => {
  const { showToast } = useToast();
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy).then(() => {
      showToast('Texto copiado al portapapeles', 'success');
    });
  };
  return (
    <button
      onClick={handleCopy}
      data-clipboard-target="#materialTailwind"
      className="btn relative h-8 max-h-[40px] w-8 max-w-[40px] select-none rounded-lg bg-gray-900 text-center align-middle font-sans text-xs font-medium uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="h-5 w-5 text-white">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"></path>
        </svg>
      </span>
    </button>
  );
};

export default CopyToClipBoard;
