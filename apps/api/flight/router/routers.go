package router

import (
	"hamoye/apps/api/flight/controllers"
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetAllFilghts(c *gin.Context) {
  flights := controllers.GetAllFilghts()
  c.JSON(http.StatusOK, flights)
}
