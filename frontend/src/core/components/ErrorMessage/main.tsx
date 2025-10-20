import { cn } from '@/core/utils/cn';
import type { ErrorMessageProps } from './types';

/**
 * @component ErrorMessage
 * @summary Error message display component.
 * @domain core
 * @type ui-component
 * @category feedback
 *
 * @description
 * Displays error messages with optional retry and back actions.
 */
export const ErrorMessage = ({ title, message, onRetry, onBack, className }: ErrorMessageProps) => {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8', className)}>
      <div className="text-center space-y-4 max-w-md">
        <div className="text-red-600">
          <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600">{message}</p>
        <div className="flex gap-4 justify-center mt-6">
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              Tentar Novamente
            </button>
          )}
          {onBack && (
            <button
              onClick={onBack}
              className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Voltar
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
