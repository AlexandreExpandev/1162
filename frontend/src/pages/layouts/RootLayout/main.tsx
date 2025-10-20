import { Outlet } from 'react-router-dom';
import type { RootLayoutProps } from './types';

/**
 * @component RootLayout
 * @summary Root layout component that wraps all pages with common structure.
 * @domain core
 * @type layout-component
 * @category layout
 *
 * @description
 * Provides the base layout structure for the entire application.
 * Contains common elements that appear on all pages.
 */
export const RootLayout = (props: RootLayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};
