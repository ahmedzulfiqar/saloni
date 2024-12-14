import "./App.css";
import Home from "./components/pages/Home";
import Navbar from "./components/sections/Navbar";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Chrachterdesigns from "./components/pages/Chrachterdesigns";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Illustration from "./components/pages/Illustration";
import Portfolio from "./components/pages/Portfolio";
function App() {
  return (
   
      <div className="App  bg-whiter p-0 m-0">
        <div className="row p-0 m-0">
          <Navbar />
          <div className="col-12  p-0 m-0">
            <div className="row p-0 m-0">
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route
                  path="/chrachterdesigns"
                  element={<Chrachterdesigns />}
                />
                <Route path="/illustration" element={<Illustration />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;

{
  /*SELECT * FROM books;
SELECT * FROM authors;

SELECT b.title, a.name AS author, b.genre, b.publication_year 
FROM books b
JOIN authors a ON b.author_id = a.author_id;

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100),
    phone VARCHAR(15)
);

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL
);

CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL,
    customer_id INT,
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);
CREATE TABLE order_details (
    order_detail_id SERIAL PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity INT NOT NULL,
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);

INSERT INTO customers (name, email, phone) VALUES 
('Alice Johnson', 'alice@example.com', '555-1234'),
('Bob Smith', 'bob@example.com', '555-5678'),
('Charlie Brown', 'charlie@example.com', '555-8765');

INSERT INTO products (name, price) VALUES 
('Laptop', 999.99),
('Smartphone', 499.99),
('Tablet', 299.99);

INSERT INTO orders (order_date, customer_id) VALUES 
('2024-01-10', 1),
('2024-02-15', 2),
('2024-03-20', 3);

INSERT INTO order_details (order_id, product_id, quantity) VALUES 
(1, 3, 5),
(2, 1, 2),
(3, 2, 1);


SELECT * FROM customers;
SELECT * FROM products;
SELECT * FROM orders;




SELECT o.order_id, o.order_date, c.name AS customer, p.name AS product, od.quantity 
FROM order_details od
JOIN orders o ON od.order_id = o.order_id
JOIN customers c ON o.customer_id = c.customer_id
JOIN products p ON od.product_id = p.product_id;


SELECT MAX(od.quantity) from order_details od;


SELECT * from customers ;
SELECT * from order_details ;
SELECT * from orders ;
SELECT * from products ;


SELECT cs.name , cs.email , cs.phone , od.order_date , odd.quantity , pro.name , pro.price
from orders od JOIN order_details odd ON od.order_id = odd.order_id JOIN customers cs ON cs.customer_id = od.customer_id 
JOIN products pro On odd.product_id = pro.product_id ;


CREATE VIEW fullorderview2 AS
SELECT cs.name , cs.email , cs.phone , od.order_date , odd.quantity , pro.name AS proname , pro.price
from orders od JOIN order_details odd ON od.order_id = odd.order_id JOIN customers cs ON cs.customer_id = od.customer_id 
JOIN products pro On odd.product_id = pro.product_id ;



Select * from fullorderview2




CREATE OR REPLACE FUNCTION add_customer2(cust_name VARCHAR, cust_email VARCHAR, cust_phone VARCHAR)
RETURNS VARCHAR AS $$
BEGIN
    INSERT INTO customers (name, email, phone) VALUES (cust_name, cust_email, cust_phone);
    RETURN 'Customer added successfully';
END;
$$ LANGUAGE plpgsql;


SELECT add_customer2('Ahmed', 'ahmed@example.com', '123-456-7890')



CREATE OR REPLACE FUNCTION totalsold2(prod_id INT) RETURNS INT AS $$
DECLARE
    total_quantity INT;
BEGIN
    SELECT SUM(quantity) INTO total_quantity
	FROM order_details
WHERE product_id = prod_id;
RETURN total_quantity;
	
END;
$$ LANGUAGE plpgsql;

SELECT totalsold2(3);


CREATE OR REPLACE FUNCTION totalmoneyearntfromsingleproduct2(prod_name VARCHAR) RETURNS INT AS $$
DECLARE
    total_money_earnt INT;
BEGIN
    SELECT SUM(order_details.quantity * products.price) INTO total_money_earnt
from order_details  
JOIN products 
ON order_details.product_id = products.product_id
WHERE products.name = prod_name ;
	RETURN total_money_earnt;
	
END;
$$ LANGUAGE plpgsql;

SELECT totalmoneyearntfromsingleproduct2('Laptop');



SELECT products.name ,SUM(order_details.quantity * products.price)
from order_details  
JOIN products 
ON order_details.product_id = products.product_id
GROUP BY (products.name) ;




// complexquery


CREATE OR REPLACE FUNCTION totalmoneyspentcustomer(custom_id INT) RETURNS INT AS $$
DECLARE
    total_money_spent INT;
BEGIN
SELECT SUM(order_details.quantity * products.price)  INTO total_money_spent
from orders JOIN customers ON customers.customer_id = orders.customer_id
JOIN order_details ON order_details.order_id = orders.order_id
JOIN products ON  products.product_id = order_details.product_id WHERE orders.customer_id = custom_id  ;
RETURN total_money_spent;
	
END;
$$ LANGUAGE plpgsql;

SELECT totalmoneyspentcustomer(2);

SELECT orders.customer_id , customers.name , order_details.quantity , products.price , products.name 
from orders JOIN customers ON customers.customer_id = orders.customer_id
JOIN order_details ON order_details.order_id = orders.order_id
JOIN products ON  products.product_id = order_details.product_id


SELECT orders.customer_id  , SUM(order_details.quantity * products.price)  
from orders JOIN customers ON customers.customer_id = orders.customer_id
JOIN order_details ON order_details.order_id = orders.order_id
JOIN products ON  products.product_id = order_details.product_id GROUP BY (orders.customer_id);



SELECT * from customers ;
SELECT * from order_details ;
SELECT * from orders ;
SELECT * from products ;







*/
}
