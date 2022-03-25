import styles from './error-fallback.module.css';

export const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div role="alert" className={styles.fallback}>
    Apologies, something went wrong.
  </div>
);
