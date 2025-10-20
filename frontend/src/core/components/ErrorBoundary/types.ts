import { ReactNode } from 'react';

/**
 * @interface ErrorBoundaryProps
 * @summary Type definitions for ErrorBoundary component properties.
 */
export interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

/**
 * @interface ErrorBoundaryState
 * @summary Type definitions for ErrorBoundary component state.
 */
export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}
