/**
 * @summary
 * Creates a standardized success response object
 *
 * @function successResponse
 * @module utils/response
 *
 * @param {T} data - Response data
 * @param {object} [metadata] - Optional metadata
 *
 * @returns {object} Standardized success response
 *
 * @example
 * const response = successResponse({ id: 1, name: 'Timer' });
 */
export function successResponse<T>(
  data: T,
  metadata?: {
    page?: number;
    pageSize?: number;
    total?: number;
    [key: string]: any;
  }
): {
  success: true;
  data: T;
  metadata?: any;
} {
  return {
    success: true,
    data,
    ...(metadata && {
      metadata: {
        ...metadata,
        timestamp: new Date().toISOString(),
      },
    }),
  };
}
