package postgres

import (
	"backend/config"
	"context"
	"fmt"
	"time"

	"github.com/exaring/otelpgx"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/rs/zerolog/log"
	"github.com/spf13/viper"
)

type Postgres struct {
	maxPoolSize  int32
	connAttempts int
	connTimeout  time.Duration

	Pool *pgxpool.Pool
}

func MustInitPg() *Postgres {
	connString := fmt.Sprintf("user=%v host=%v port=%v dbname=%v password=%v sslmode=disable",
		viper.GetString(config.DBUser),
		viper.GetString(config.DBHost),
		viper.GetInt(config.DBPort),
		viper.GetString(config.DBName),
		viper.GetString(config.DBPassword),
	)

	pg := &Postgres{
		maxPoolSize:  viper.GetInt32(config.MaxPool),
		connAttempts: viper.GetInt(config.ConnAttempts),
		connTimeout:  time.Duration(viper.GetInt(config.Timeout)) * time.Second,
	}

	poolConfig, err := pgxpool.ParseConfig(connString)
	if err != nil {
		panic(fmt.Sprintf("error parsing config: %v", err.Error()))
	}

	poolConfig.ConnConfig.Tracer = otelpgx.NewTracer()

	for pg.connAttempts > 0 {
		pg.Pool, err = pgxpool.NewWithConfig(context.Background(), poolConfig)
		if err == nil {
			if pingErr := pg.Pool.Ping(context.Background()); pingErr == nil {
				break
			} else {
				err = pingErr
			}
		}

		log.Log.Info(fmt.Sprintf("Postgres is trying to connect, attempts left: %d", pg.connAttempts))

		time.Sleep(pg.connTimeout)

		pg.connAttempts--
	}

	if err != nil {
		panic(fmt.Sprintf("error while connecting to db: %v", err.Error()))
	}

	return pg
}

func (p *Postgres) Close() {
	if p.Pool != nil {
		p.Pool.Close()
	}
}
