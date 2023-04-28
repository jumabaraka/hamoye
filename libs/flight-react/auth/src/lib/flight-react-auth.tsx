import styles from './flight-react-auth.module.css';

/* eslint-disable-next-line */
export interface FlightReactAuthProps {}

export function FlightReactAuth(props: FlightReactAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FlightReactAuth!</h1>
    </div>
  );
}

export default FlightReactAuth;
