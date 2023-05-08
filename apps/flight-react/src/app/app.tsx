// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Dashboard, Login, Test } from '@hamoye/flight-react/ui';
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}

      <Routes>
        <Route
          path="/"
          element={ <Dashboard /> }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
        <Route path="/login" element={ <Login /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/test" element={ <Test /> } />
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
