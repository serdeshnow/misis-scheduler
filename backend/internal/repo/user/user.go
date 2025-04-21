package user

import (
	"backend/internal/models"
	"backend/internal/postgres"
	"context"
)

type UserRepo struct {
	*postgres.Postgres
}

func InitUserRepo(db *postgres.Postgres) *UserRepo {
	return &UserRepo{db}
}

func (r *UserRepo) GetUser(ctx context.Context, id int) (*models.User, error) {
	var user models.User
	err := r.Pool.QueryRow(ctx, `SELECT id, name FROM users WHERE id = $1`, id).Scan(&user.ID, &user.Name)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *UserRepo) CreateUser(ctx context.Context, id, name string) (string, error) {
	err := r.Pool.QueryRow(ctx, "INSERT INTO users (id, name) VALUES ($1, $2) RETURNING id", id, name).Scan(&id)
	if err != nil {
		return "", err
	}
	return id, nil
}

func (r *UserRepo) GetUserMainSchedule(ctx context.Context, userID int) (*models.Schedule, error) {
	var schedule models.Schedule
	err := r.Pool.QueryRow(ctx, `SELECT id_schedule FROM user_schedule WHERE id_user = $1 and is_main = true`, userID).
		Scan(&schedule.ID)
	if err != nil {
		return nil, err
	}
	return &schedule, nil
}
