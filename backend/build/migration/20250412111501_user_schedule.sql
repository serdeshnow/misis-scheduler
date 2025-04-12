-- +goose Up
-- +goose StatementBegin
Create table if not exists users
(
    id   varchar,
    name varchar
);

CREATE TABLE IF not exists schedule
(
    id        serial primary key,
    name      varchar,
    type      varchar,
    monday    json,
    tuesday   json,
    wednesday json,
    thursday  json,
    friday    json,
    saturday  json
);

CREATE TABLE IF NOT EXISTS user_schedule
(
    id_user varchar,
    id_schedule bigint
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
-- +goose StatementEnd
