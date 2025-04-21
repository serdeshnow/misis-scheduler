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
    mondayUp    json,
    tuesdayUp   json,
    wednesdayUp json,
    thursdayUp  json,
    fridayUp    json,
    saturdayUp  json,
    mondayDown    json,
    tuesdayDown   json,
    wednesdayDown json,
    thursdayDown  json,
    fridayDown    json,
    saturdayDown  json
);

CREATE TABLE IF NOT EXISTS user_schedule
(
    name varchar,
    id_user varchar,
    id_schedule bigint,
    is_main boolean
);
-- +goose StatementEnd

-- +goose Down
-- +goose StatementBegin
SELECT 'down SQL query';
drop table if exists user_schedule;
drop table if exists schedule;
drop table if exists users;
-- +goose StatementEnd
