import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/core/lib/queryClient';

/**
 * @component AppProviders
 * @summary Wraps the application with all necessary context providers.
 * @domain core
 * @type provider-wrapper
 * @category application
 *
 * @description
 * Centralizes all application-level providers including:
 * - TanStack Query for server state management
 * - Future providers can be added here (Auth, Theme, etc.)
 */
export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
