import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './dashboard.module.css';
import { auth } from '@hamoye/flight-react/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/login');
  }, [user, loading, navigate]);
  
  return (
    <div className={styles['container']}>
      <h1>Welcome to Dashboard!</h1>
      <div>{user?.email}</div>
    </div>
  );
}

export default Dashboard;
