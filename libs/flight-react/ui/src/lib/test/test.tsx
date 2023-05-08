/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { useEffect, useState } from 'react';
import styles from './test.module.css';
import { Flight } from '@hamoye/shared/data-access';

/* eslint-disable-next-line */
export interface TestProps {}

export function Test(props: TestProps) {

  const [flights, setFlights] = useState<any[]>([]);

  useEffect(() => {
    const fetchFlights = async() => {
      const res = await fetch('http://localhost:8080/flights');
      const data = await res.json();
      const flightData = data.map((flight: any) => ({
        airport: flight.estDepartureAirport || flight.estArrivalAirport,
        time: new Date(flight.lastSeen).toLocaleTimeString(),
        arriving: flight.estArrivalAirport ? 1 : 0,
        departing: flight.estDepartureAirport ? 1 : 0,
      }))
      setFlights(flightData);
    };
    fetchFlights();
  }, []);

  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleDateString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
      timeZone: 'America/Chicago',
    });
  }

  const filteredFlights = flights.filter(
    (flight) => flight.airport !== ""
  );


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
              {filteredFlights.map((flight, index) => (
                <tr
                  key={index}
                  className="bg-white border-b "
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{flight.airport}</td>
                  <td className="px-6 py-4">
                    {flight.time }
                  </td>
                  <td className="px-6 py-4 ">
                    {flight.arriving}
                  </td>
                  <td className="px-6 py-4">{flight.departing}</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}

export default Test;
