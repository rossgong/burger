DROP DATABASE IF EXISTS sandwiches_db;
CREATE database sandwiches_db;

USE sandwiches_db;

CREATE TABLE sandwiches (
    id integer NOT NULL AUTO_INCREMENT,
    sandwich_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY(id)
);

