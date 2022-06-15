--criando tabelas no mysql

CREATE DATABASE ex_db;

CREATE TABLE category(
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR (100) NOT NULL,
     PRIMARY KEY (id)
);

CREATE TABLE product (
    id INT NOT NULL AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    preço DECIMAL(100, 2) NOT NULL,
    peso DECIMAL(100, 2) NOT NULL,
    category_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (category_id) REFERENCES category(id)
);

INSERT INTO category (id, nome) VALUES (1, 'João'), (2, 'Maria');