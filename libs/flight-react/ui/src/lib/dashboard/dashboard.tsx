/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from './dashboard.module.css';
import { auth } from '@hamoye/flight-react/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { Flight } from '@hamoye/shared/data-access';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {

  const [flights, setFlights] = useState<any[]>([]); // [1
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const begin = new Date(1517227200 * 1000).toISOString();
  const end = new Date(1517230800 * 1000).toISOString();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate('/login');

    fetch('http://localhost:8080/flights')
      .then((res) => res.json())
      .then((data) => setFlights(data));
  }, [user, loading, navigate]);

  const filteredFlights = flights.filter(
    (flight) => flight.estArrivalAirport !== ""
  );

  const formatTime = (time: number) => {
    const date = new Date(time * 1000);
    return date.toISOString();
  };

  return (
    <div>

      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center">
            <span className="self-center text-2xl font-semibold whitespace-nowrap">Hamoye Flight</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 ">
              Get started
            </button>

          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


      <div className='container mx-auto my-32'>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  AIRPORT
                </th>
                <th scope="col" className="px-6 py-3">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Arriving
                </th>
                <th scope="col" className="px-6 py-3">
                  Departing
                </th>

              </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;
