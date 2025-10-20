import type { HomePageProps } from './types';

/**
 * @page HomePage
 * @summary Home page displaying welcome message and timer placeholder.
 * @domain core
 * @type page-component
 * @category home
 *
 * @routing
 * - Path: /
 * - Params: none
 * - Query: none
 * - Guards: none
 *
 * @description
 * Landing page of the application. Will contain the timer feature
 * once implemented.
 */
export const HomePage = (props: HomePageProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Timer Simples</h1>
        <p className="text-lg text-gray-600">
          Um timer que inicia a contagem de tempo ao clicar em um botão.
        </p>
        <div className="mt-8 p-8 bg-white rounded-lg shadow-md">
          <p className="text-gray-500">Timer feature will be implemented here</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
