CREATE DATABASE myshop;

CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(32) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL,
    avatar VARCHAR
);

CREATE TABLE product (
    id UUID PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    stock INTEGER DEFAULT 1,
    description TEXT NOT NULL,
    photo VARCHAR
);

CREATE TABLE cart (
    id UUID PRIMARY KEY,
    uid UUID NOT NULL REFERENCES users(id),
    title VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    description TEXT NOT NULL,
    photo VARCHAR,
    total INTEGER,
    status INTEGER DEFAULT 0
);