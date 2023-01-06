CREATE DATABASE myshop;

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
    uid VARCHAR NOT NULL,
    title VARCHAR(64) NOT NULL,
    price INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    description TEXT NOT NULL,
    photo VARCHAR,
    total INTEGER,
    status INTEGER DEFAULT 0
);