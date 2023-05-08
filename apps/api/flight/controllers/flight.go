package controllers

import (
	"encoding/json"
	"fmt"
	"hamoye/apps/api/flight/model"
	"net/http"
)

func GetAllFilghts() *[]model.Flight {
  url := "https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800"

  resp, err := http.Get(url)
  if err != nil {
    panic(err)
  }
  defer resp.Body.Close()

  var flights *[]model.Flight
  err = json.NewDecoder(resp.Body).Decode(&flights)
  if err != nil {
    panic(err)
  }

  fmt.Println(flights)

  return flights
}
