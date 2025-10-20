import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * @utility cn
 * @summary Utility function for merging Tailwind CSS classes.
 * @domain core
 * @type utility-function
 * @category styling
 *
 * @description
 * Combines clsx and tailwind-merge to intelligently merge CSS classes,
 * handling Tailwind class conflicts properly.
 *
 * @example
 * ```typescript
 * cn('px-4 py-2', 'px-6') // Returns: 'py-2 px-6'
 * cn('text-red-500', condition && 'text-blue-500') // Conditional classes
 * ```
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
