import { AppProviders } from './providers';
import { AppRouter } from './router';

/**
 * @component App
 * @summary Root application component that wraps the entire application with providers and routing.
 * @domain core
 * @type root-component
 * @category application
 *
 * @description
 * The App component serves as the root of the React component tree.
 * It wraps the application with necessary providers (QueryClient, Router, etc.)
 * and initializes the routing system.
 */
export const App = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};
