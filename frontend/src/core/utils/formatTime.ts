/**
 * @utility formatTime
 * @summary Formats time in seconds to MM:SS format.
 * @domain core
 * @type utility-function
 * @category formatting
 *
 * @param {number} seconds - Time in seconds
 * @returns {string} Formatted time string (MM:SS)
 *
 * @example
 * ```typescript
 * formatTime(65) // Returns: '01:05'
 * formatTime(3600) // Returns: '60:00'
 * ```
 */
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}
