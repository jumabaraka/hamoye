/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

export function sharedDataAccess(): string {
  return 'shared-data-access';
}

interface Airport {
  name: string;
  code: string;
  country: string;
}

// Get all airports from OpenSky API
export async function getAirports(): Promise<Airport[]> {
  const response = await axios.get('https://opensky-network.org/api/flights/all?begin=1682602755&end=1682609665')
  const airportsData = response.data;
  const airports: Airport[] = airportsData.map((airport: any) => ({
    name: airport.name,
    code: airport.code,
    country: airport.country
  }))

  return airports;
}


export interface Flight {
  airport: string;
  time: string;
  arriving: number;
  departing: number;
}


export function getConvertedData(): Promise<any> {
  const response =  fetch('https://opensky-network.org/api/flights/all?begin=1682602755&end=1682609665', {
    method: 'GET', headers: { 'Content-Type': 'application/json' }
}).then((response) => response.json())

  console.log("Responssfdge: ", response);

  return response
}


// Get all airports from OpenSky API
export async function getAllFlights() {
  const response = fetch('http://localhost:8080/flights')
  console.log("Response-go: ", response);
  return response;
}
