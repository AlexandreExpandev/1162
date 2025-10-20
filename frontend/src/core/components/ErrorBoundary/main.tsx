import { Component, ReactNode, ErrorInfo } from 'react';
import type { ErrorBoundaryProps, ErrorBoundaryState } from './types';

/**
 * @component ErrorBoundary
 * @summary Error boundary component for catching and handling React errors.
 * @domain core
 * @type error-boundary
 * @category error-handling
 *
 * @description
 * Catches JavaScript errors anywhere in the child component tree,
 * logs those errors, and displays a fallback UI.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center space-y-4 p-8">
              <h1 className="text-3xl font-bold text-red-600">Algo deu errado</h1>
              <p className="text-gray-600">
                Ocorreu um erro inesperado. Por favor, recarregue a página.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                Recarregar Página
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
