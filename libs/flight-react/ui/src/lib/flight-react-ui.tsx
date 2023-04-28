import styles from './flight-react-ui.module.css';

/* eslint-disable-next-line */
export interface FlightReactUiProps {}

export function FlightReactUi(props: FlightReactUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FlightReactUi!</h1>
    </div>
  );
}

export default FlightReactUi;
