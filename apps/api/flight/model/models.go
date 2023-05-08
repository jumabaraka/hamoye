package model

type Flight struct {
  FirstSeen int `json:"firstSeen"`
  EstDepartureAirport string `json:"estDepartureAirport"`
  LastSeen int `json:"lastSeen"`
  EstArrivalAirport string `json:"estArrivalAirport"`
}
