package config

import (
	"fmt"
	"os"
	"time"

	"github.com/spf13/viper"
)

const (
	AppMode = "APP_MODE"

	DBName       = "PG_NAME"
	DBUser       = "PG_USER"
	DBPassword   = "PG_PASSWORD"
	DBHost       = "PG_HOST"
	DBPort       = "PG_PORT"
	MaxPool      = "PG_MAX_POOL"
	Timeout      = "PG_TIMEOUT"
	ConnAttempts = "PG_CONN_ATTEMPTS"

	ServiceHost    = "SERVICE_HOST"
	ServicePort    = "SERVICE_PORT"
	ContextTimeout = "BACKGROUND_CONTEXT_TIMEOUT"
)

const (
	_defaultMaxPoolSize  = 1
	_defaultConnAttempts = 10
	_defaultConnTimeout  = time.Second
)

func MustInitConfig() {
	envPath, err := os.Getwd()
	if err != nil {
		panic(fmt.Sprintf("err getting work dir: %v", err.Error()))
	}

	viper.SetConfigName(".env")
	viper.SetConfigType("env")

	viper.AddConfigPath("../../")
	viper.AddConfigPath(envPath)

	viper.AutomaticEnv()

	viper.SetDefault("PG_MAX_POOL", _defaultMaxPoolSize)
	viper.SetDefault("PG_CONN_ATTEMPTS", _defaultConnAttempts)
	viper.SetDefault("PG_TIMEOUT", _defaultConnTimeout.Seconds())

	err = viper.ReadInConfig()
	if err != nil {
		panic(fmt.Sprintf("error while reading config: %v", err))
	}
}
