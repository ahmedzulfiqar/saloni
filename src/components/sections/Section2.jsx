import React from "react";
import character from "../media/Character Design Icon.png";
import Illustration from "../media/Illustration Icon.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Section2() {
  return (
    <div
      className="d-flex align-items-center justify-content-center position-relative py-lg-0 py-5"
      style={{ minHeight: "75vh" }}
    >
      <div className="container">
        <div className="row m-0 justify-content-center">
          <motion.div
            className="col-lg-5 col-12 text-center fontitalic display-3 position-relative"
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What I do Best
            <svg
              className="curved-underline w-75 m-0"
              viewBox="0 0 200 20"
              xmlns="http://www.w3.org/2000/svg"
              style={{ top: "50%", transform: "translateY(-90%)" }}
            >
              <path
                d="M 10 15 Q 100 10 190 15"
                style={{
                  stroke: "#ff97dc",
                  strokeWidth: 3,
                  fill: "transparent",
                }}
              />
            </svg>
          </motion.div>

          <div className="col-12 ">
            <div className="row m-0 justify-content-evenly">
              <div className="col-lg-5 col-12 text-center px-lg-5 px-2">
                <motion.div
                  className="d-flex justify-content-center align-items-center mx-auto d-md-block d-none"
                  style={{ width: "200px", height: "170px" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={Illustration}
                    className="img-fluid mx-auto w-75"
                    alt="Character Design"
                  />
                </motion.div>
                <motion.div
                  className="d-flex justify-content-center align-items-center mx-auto d-lg-none d-block "
                  style={{ width: "100px", height: "70px" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={Illustration}
                    className="img-fluid mx-auto w-75 py-2"
                    alt="Character Design"
                  />
                </motion.div>
                <motion.div
                  className="text-main text-uppercase fontbold fs-4 py-lg-2 py-3"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  Illustration
                </motion.div>
                <motion.p
                  className=" fs-5  fontitalic"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  From storyboarding to vector graphics, editorial illustrations
                  to iconography, I can help with all your visual development
                  needs!
                </motion.p>
                <Link
                  className="btn mt-2 bg-main py-lg-2 fs-6 text-light rounded-1 px-lg-5 px-2 py-1"
                  to={"/illustration"}
                >
                  View Portfolio
                </Link>
              </div>
              <div className="col-lg-5 col-12 text-center px-lg-5 px-2 mt-lg-0 mt-5">
                <motion.div
                  className="d-lg-flex d-none justify-content-center align-items-center mx-auto"
                  style={{ width: "200px", height: "170px" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={character}
                    className="img-fluid mx-auto w-75"
                    alt="Illustration"
                  />
                </motion.div>{" "}
                <motion.div
                  className="d-flex justify-content-center align-items-center mx-auto d-lg-none d-block"
                  style={{ width: "100px", height: "70px" }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={character}
                    className="img-fluid mx-auto w-100"
                    alt="Character Design"
                  />
                </motion.div>
                <motion.div
                  className="text-main text-uppercase fontbold fs-4 py-lg-2 py-3"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 }}
                >
                  CHARACTER DESIGN
                </motion.div>
                <motion.p
                  className=" fs-5  fontitalic"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                >
                  In my downtime, you’ll always find me doodling little animals
                  goofing about. Sometimes pretty ladies too. But hey - that’s
                  not all I draw!
                </motion.p>
                <Link
                  className="btn mt-2 bg-main py-lg-2 fs-6 text-light rounded-1 px-lg-5 px-2 py-1"
                  to="/chrachterdesigns"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
