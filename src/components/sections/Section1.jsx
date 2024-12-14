import { motion } from "framer-motion";
import React from "react";
function Section1() {
  return (
    <div
      className="col-12 d-flex align-items-center bg-main position-relative"
      style={{
        minHeight: "65vh",
      }}
    >
      <div className="container py-lg-0 py-5">
        <div className="row m-0 justify-content-between">
          <motion.div
            className="col-12 align-self-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: -30 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <p className="text-light display-3 pt-0 fontitalic d-md-block d-none ">
              Hello, I’m Saloni, an illustrator, animator and self professed
              lover of color! I’m based in Mumbai where I spend most of my time
              drawing silly cats and playful patterns.
            </p>{" "}
            <p className="text-light fs-3 pt-0 fontitalic d-md-none d-block">
              Hello, I’m Saloni, an illustrator, animator and self professed
              lover of color! I’m based in Mumbai where I spend most of my time
              drawing silly cats and playful patterns.
            </p>
          </motion.div>
  
        </div>
      </div>
    </div>
  );
}

export default Section1;
