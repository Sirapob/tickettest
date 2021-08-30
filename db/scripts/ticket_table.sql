CREATE TABLE IF NOT EXISTS customer (
  customer_id int NOT NULL AUTO_INCREMENT,
  username varchar(250) NOT NULL,
  password varchar(250) NOT NULL,
  email varchar(250) NULL,
  phone varchar(50) NULL,
  date DATETIME NOT NULL,
  status varchar(10) NOT NULL,
  PRIMARY KEY (customer_id)
);

CREATE TABLE IF NOT EXISTS ticket_type (
  id int NOT NULL AUTO_INCREMENT,
  type varchar(250) NOT NULL,
  price decimal(10) NOT NULL,
  amount decimal(10) NOT NULL,
  minimum decimal(10) NOT NULL,
  date DATETIME NOT NULL,
  status varchar(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS ticket (
  ticket_id int NOT NULL AUTO_INCREMENT,
  amount decimal(10) NOT NULL,
  date DATETIME NOT NULL,
  type_id INT NOT NULL,
  customer_id INT NOT NULL,
  status varchar(10) NOT NULL,
  PRIMARY KEY (ticket_id),
  CONSTRAINT fk_type
      FOREIGN KEY(type_id) 
	  REFERENCES ticket_type(id),
  CONSTRAINT fk_customer
      FOREIGN KEY(customer_id) 
	  REFERENCES customer(customer_id)	  
);

INSERT INTO ticket_type (type, price,amount,minimum,date,status) 
VALUES ('A',5000,10,1,'2021-08-25 19:10:25','Y');

INSERT INTO ticket_type (type, price,amount,minimum,date,status) 
VALUES ('B',2500,20,2,'2021-08-25 19:10:25','Y');

INSERT INTO ticket_type (type, price,amount,minimum,date,status) 
VALUES ('C',1000,30,2,'2021-08-25 19:10:25','Y');
    
INSERT INTO ticket_type (type, price,amount,minimum,date,status) 
VALUES ('D',500,40,3,'2021-08-25 19:10:25','Y');


