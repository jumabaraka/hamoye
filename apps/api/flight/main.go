package main

import (
	"hamoye/apps/api/flight/router"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Hello(name string) string {
	result := "Hello " + name
	return result
}

func main() {
	r := gin.Default()
  config := cors.Config{
    AllowOrigins:     []string{"http://localhost:4200", "http://localhost:4201", "http://localhost:3000"},
    AllowMethods:    []string{"GET"},
    AllowHeaders:    []string{"Origin"},
    AllowCredentials: true,
  }
  r.Use(cors.New(config))
  r.GET("/flights", router.GetAllFilghts)
  r.Run(":8080")
}
