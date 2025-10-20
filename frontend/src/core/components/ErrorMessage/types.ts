/**
 * @interface ErrorMessageProps
 * @summary Type definitions for ErrorMessage component properties.
 */
export interface ErrorMessageProps {
  /**
   * Error title
   */
  title: string;

  /**
   * Error message description
   */
  message: string;

  /**
   * Retry action handler
   */
  onRetry?: () => void;

  /**
   * Back action handler
   */
  onBack?: () => void;

  /**
   * Additional CSS classes
   */
  className?: string;
}
