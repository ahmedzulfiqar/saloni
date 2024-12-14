import React, { useState } from "react";
import logo from "../media/ezgif-4-e21cfa4624.gif";
import { Link } from "react-router-dom";
import { easeInOut, motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 100, y: 0 },
    closed: { opacity: 0, y: "0%" },
  };
  return (
    <motion.div className="col-12  py-lg-2 py-3 bg-main fontlight ">
      <motion.div
        className="container"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, delay: 1 }}
      >
        <div className="row m-0">
          <div className="col-4 d-flex justify-content-start">
            <Link className="links px-3 py-2 fs-6 text-light" to="/home">
              <img
                src={logo}
                className="img-fluid w-25 d-lg-block d-none"
                alt="Logo"
              />
            </Link>
            <Link path="/home">
              {" "}
              <img
                src={logo}
                className="img-fluid w-75 p-0 d-lg-none d-block"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="col-8 align-self-center d-lg-block d-none">
            <div className="d-flex w-100 justify-content-end text-uppercase">
              <Link className="links px-3 py-2 fs-6 text-light" to="/">
                Home
              </Link>
              <Link
                className="links px-3 py-2 fs-6 text-light"
                to="/chrachterdesigns"
              >
                Character Designs
              </Link>
              <Link
                className="links px-3 py-2 fs-6 text-light"
                to="/illustration"
              >
                Illustrations
              </Link>
              <Link className="links px-3 py-2 fs-6 text-light" to="about">
                About
              </Link>
            </div>
          </div>

          <div
            className="col align-self-center justify-content-end d-lg-none d-flex"
            onClick={() => setIsOpen(!isOpen)}
          >
            {!isOpen ? (
              <i class="fa fa-bars fs-3 text-light" aria-hidden="true"></i>
            ) : (
              <i class="fa fa-x fs-3 text-light" aria-hidden="true"></i>
            )}
          </div>
        </div>
      </motion.div>
      {isOpen && (
        <motion.div
          className="bg- d-lg-none d-block position-absolute z-3 bg-main vh-100  start-0 w-100 filterr"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          transition={{ type: easeInOut, duration: 0.3 }}
        >
          <div className="container pt-4 bg-main ps-3 pb-3">
            <div className="fiv py-2">
              {" "}
              <Link
                className="links px-3 py-2 fs-3 text-light w-100"
                to="/"
                onClick={() => setIsOpen(!isOpen)}
              >
                Home
              </Link>
            </div>
            <div className="fiv py-2">
              {" "}
              <Link
                className="links px-3 py-2 fs-3 text-light w-100"
                to="/chrachterdesigns"
                onClick={() => setIsOpen(!isOpen)}
              >
                Character Designs
              </Link>
            </div>
            <div className="fiv py-2">
              {" "}
              <Link
                className="links px-3 py-2 fs-3 text-light w-100"
                to="/illustration"
                onClick={() => setIsOpen(!isOpen)}
              >
                Illustrations
              </Link>
            </div>
            <div className="fiv py-2">
              {" "}
              <Link
                className="links px-3 py-2 fs-3 text-light w-100"
                to="about"
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Navbar;
