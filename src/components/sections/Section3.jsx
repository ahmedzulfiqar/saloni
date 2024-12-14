import React from "react";
import image from "../media/Get in touch logo.png";
import image2 from "../media/ezgif-4-e21cfa4624.gif";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Section3() {
  return (
    <motion.div
      className="d-flex align-items-center bg-primarys py-5 justify-content-center position-relative"
      id="er"
      style={{
        minHeight: "75vh",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="container fontitalic">
        <div className="row m-0 justify-content-center">
          <div className="col-lg-8 col-12 text-center  ">
            <motion.img
              src={image}
              alt=""
              className=" img-fluid p-5 pb-0 w-25 mx-auto d-md-block d-none"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            />{" "}
            <motion.img
              src={image}
              alt=""
              className=" img-fluid w-25 mx-auto d-md-none d-block"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
            />
            <motion.div
              className="display-4 fontitalic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              Want to work together?
            </motion.div>
            <motion.p
              className="fs-3 pt-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              viewport={{ once: true }}
            >
              Leave me a message if you got a brief for me. Let's have a chat!
            </motion.p>
          </div>
          <div className="col-lg-6  col-12 mt-lg-5 mt-2 justify-content-center">
            <form>
              {/* Name Field */}
              <div className="row form-group d-flex align-items-center justify-content-center my-4">
                <label
                  htmlFor="name"
                  className="col-lg-1 col-12 text-start pe-lg-5 pb-lg-0 pb-2"
                  style={{ transform: "translateX(-10px)" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  className="col-lg-10 col-12 border-0 px-3 py-2 rounded-3"
                  id="name"
                />
              </div>

              {/* Email Field */}
              <div className="form-group row d-flex  justify-content-center align-items-center my-4">
                <label
                  htmlFor="email"
                  className="col-lg-1 col-12 text-start pe-lg-5 pb-lg-0 pb-2"
                  style={{ transform: "translateX(-10px)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  className="col-lg-10 col-12  border-0 px-3 py-2 rounded-3"
                  id="email"
                />
              </div>

              {/* Budget Field */}
              <div className="row form-group d-flex  justify-content-center align-items-center my-4">
                <label
                  htmlFor="Budget"
                  className="col-lg-1 col-12 text-start pe-lg-5 pb-lg-0 pb-2"
                  style={{ transform: "translateX(-10px)" }}
                >
                  Budget
                </label>
                <input
                  type="text"
                  className="col-lg-10 col-12  border-0 px-3 py-2 rounded-3"
                  id="Budget"
                />
              </div>

              {/* Message Field */}
              <div className="form-group row d-flex align-items-start  justify-content-center my-4">
                <label
                  htmlFor="message"
                  className="col-lg-1 col-12 ps-4 text-start pe-lg-5 pb-lg-0 pb-2"
                  style={{ transform: "translateX(-20px)" }}
                >
                  Message
                </label>
                <textarea
                  className="col-lg-10 col-12  border-0  py-2 rounded-3"
                  id="message"
                  rows="5"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div
                className="d-flex justify-content-center my-4"
                style={{ transform: "translatey(-40px)" }}
              >
                <button
                  type="submit"
                  className="btn btn-lg bg-main border-0 px-5 text-light  rounded-0 text-uppercase btn-center-transform"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-12 mt-5 pt-4 d-flex justify-content-center fontbold">
            <Link to={'/home'}>
              {" "}
              <img src={image2} style={{ width: "90px" }} alt="" />
            </Link>
          </div>
          <p className="text-center pt-3 fs-5">saloniramteke@gmail.com</p>
          <div className="d-flex justify-content-center">
            <a href="https://www.instagram.com/salowknee/">
              {" "}
              <i class="fa-brands fa-behance fs-3 pe-2" aria-hidden="true"></i>
            </a>
            <a href="https://www.instagram.com/salowknee/">
              {" "}
              <i
                class="fa-brands fa-instagram fs-3 ps-2"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Section3;

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
(1, 1, 1),
(2, 2, 2),
(3, 3, 1);


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
*/
}
