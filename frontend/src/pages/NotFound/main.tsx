import { useNavigate } from 'react-router-dom';
import type { NotFoundPageProps } from './types';

/**
 * @page NotFoundPage
 * @summary 404 error page displayed when route is not found.
 * @domain core
 * @type error-page
 * @category error
 *
 * @routing
 * - Path: *
 * - Params: none
 * - Query: none
 * - Guards: none
 */
export const NotFoundPage = (props: NotFoundPageProps) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh]">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700">Página não encontrada</h2>
        <p className="text-gray-600">A página que você está procurando não existe.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          Voltar para Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
