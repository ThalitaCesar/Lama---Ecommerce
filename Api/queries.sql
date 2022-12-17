CREATE TABLE IF NOT EXISTS Lama_User(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) NOT NULL,
    data DATE NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM ("NORMAL","ADMIN") DEFAULT "NORMAL"
);

CREATE TABLE IF NOT EXISTS Lama_Adresses(
	id VARCHAR(255) PRIMARY KEY,
	cep VARCHAR(255) NOT NULL,
    street VARCHAR(255) NOT NULL,
    district VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    complement VARCHAR(255),
    state VARCHAR(255) NOT NULL,
    number INT NOT NULL,
    user_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES Lama_User(id)
);

CREATE TABLE IF NOT EXISTS Lama_Product(
	id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price VARCHAR(255) NOT NULL,
    description VARCHAR(500) NOT NULL,
    created DATE NOT NULL,
    category ENUM ("FEM","MASC", "SPORT", "BA", "FOOTWEAR") DEFAULT "FEM",
    folder VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS Lama_Images(
	id VARCHAR(255) PRIMARY KEY,
	photos VARCHAR(255) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Lama_Product(id)
);

CREATE TABLE IF NOT EXISTS Lama_Size(
	id VARCHAR(255) PRIMARY KEY,
	sizes VARCHAR(100) NOT NULL,
    product_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (product_id) REFERENCES Lama_Product(id)
);






