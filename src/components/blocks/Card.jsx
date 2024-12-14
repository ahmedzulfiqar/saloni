import { motion } from "framer-motion";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

function Card({ i, index }) {
  const [opener, setOpener] = useState(false);
  // Calculate the delay based on the index, resetting every three cards
  const delay = Math.floor(index / 3) * 1;
  console.log(i);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-lg-4 col-md-6 col-12 de py-lg-3 py-2 px-lg-3 px-0 position-relative"
      transition={{
        duration: 1,
        delay: delay,
      }}
    >
      <Link to="/portfolio" state={{ data: i }}>
        <Tilt tiltReverse={true} tiltMaxAngleX={7} tiltMaxAngleY={7}>
          <div className="">
            <img src={i.image} alt="" className="img-fluid rounded-3 " />
          </div>
        </Tilt>
      </Link>
    </motion.div>
  );
}

export default Card;
