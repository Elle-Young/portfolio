DROP DATABASE data_app;
CREATE DATABASE data_app;

\c data_app;

DROP TABLE IF EXISTS data;
CREATE TABLE data (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    decription TEXT,

)