import React from "react";
import Section3 from "../sections/Section3";
import profile from "../media/profile.png";
import img1 from "../media/About-Page-Illo.gif";
import { motion } from "framer-motion";
import img2 from "../media/hey.png";
function About() {
  return (
    <>
      <motion.div
        className="d-flex align-items-center  py-5 justify-content-center position-relative"
        style={{}}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container h-100">
          <div className="row m-0 py-lg-5 py-1 h-100 justify-content-between ">
            <div className="col-lg-6 h-100  position-relative d-lg-block d-none">
              <img
                src={img2}
                className="position-absolute img-fluid  w-50 p-5 pe-0 top-0 start-0"
                style={{ transform: "translateX(-80px) translateY(-90px)" }}
                alt=""
              />{" "}
              <img
                src={profile}
                alt=""
                className="img-fluid h-100 rounded-5  w-100"
              />
            </div>
            <div className="col-lg-6 fontitalic  ps-lg-5 px-0 pe-0">
              <img
                src={img1}
                alt=""
                className="img-fluid w-50 "
                style={{ transform: "translateX(-30px) " }}
              />
              <div className="display-3 pb-3">Hi! I'm Saloni.</div>
              <div className="fs-2 py-2">
                I'm an illustrator and artist currently based in Mumbai. I've
                studied animation from Rubika, India and have been working in
                the 2D motion graphics industry for the last 4 years. I love
                drawing playful characters, bold patterns and bright colors!
              </div>
              <div className="fs-2 py-3">
                When I'm not at my desk, you'll likely find me out on a run or
                tending to my thousand house plants.
              </div>
              <div className="fs-2 py-2">
                Interested in collaborating? Use the form below to drop me a
                message — I'm always eager to chat!
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Section3 />
    </>
  );
}

export default About;
