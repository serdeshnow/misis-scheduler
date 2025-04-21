package main

import (
	"backend/config"
	"fmt"

	"github.com/spf13/viper"
)

func main() {
	config.MustInitConfig()
	fmt.Println(viper.GetInt(config.DBPort))
}
