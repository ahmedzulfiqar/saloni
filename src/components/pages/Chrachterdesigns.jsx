import React, { useState } from "react";
import Section3 from "../sections/Section3";
import { motion, stagger, useScroll } from "framer-motion";
import Card from "../blocks/Card";
import img1 from "../media/illustrator/1.mp4";
import img2 from "../media/illustrator/2 (1).mp4";
import img3 from "../media/illustrator/3.mp4";
import img4 from "../media/illustrator/4.png";
import img5 from "../media/illustrator/5.png";
import img6 from "../media/illustrator/6.png";
import img7 from "../media/illustrator/7.png";
import img8 from "../media/illustrator/8.png";
import img9 from "../media/illustrator/9.png";
import img10 from "../media/illustrator/10.png";
import img11 from "../media/illustrator/11.png";
import img12 from "../media/illustrator/12.png";
import img13 from "../media/illustrator/13.png";
import img14 from "../media/illustrator/14.png";
import img15 from "../media/illustrator/15.png";
import img16 from "../media/illustrator/16.png";
import img17 from "../media/illustrator/17.png";
import img18 from "../media/illustrator/18.png";
import img19 from "../media/illustrator/19.png";
import img20 from "../media/illustrator/20.png";
import img21 from "../media/illustrator/21.png";
import img22 from "../media/illustrator/22.png";
import img23 from "../media/illustrator/23.png";
import img24 from "../media/illustrator/24.png";

function Chrachterdesigns() {
  const Characterdata = [
    { image: img1, data: [] },
    { image: img2, data: [] },
    { image: img3, data: [] },
    { image: img4, data: [] },
    { image: img5, data: [] },
    { image: img6, data: [] },
    { image: img7, data: [] },
    { image: img8, data: [] },
    { image: img9, data: [] },
    { image: img10, data: [] },
    { image: img11, data: [] },
    { image: img12, data: [] },
    { image: img13, data: [] },
  ];
  return (
    <>
      <div className="col-12">
        <div className="container position-static">
          <div className="row m-0 py-5 my-lg-5">
            <motion.div
              className="row m-0 pt-lg-4 pt-0 position-relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
               {Characterdata &&
                Characterdata.map((i, index) => {
                  const delay = Math.floor(index / 2) * 1;

                  const isImage = (url) => {
                    return url.match(/\.(jpeg|jpg|gif|png|svg)$/) != null;
                  };

                  const isVideo = (url) => {
                    return url.match(/\.(mp4|webm|m4v|ogg)$/) != null;
                  };
                  return (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="col-lg-6 col-md-6 col-12 px-lg-3 py-lg-3 px-0 py-2 de position-relative"
                      transition={{
                        duration: 1,
                        delay: delay,
                      }}
                    >
                
                        <div className="">
                          {isImage(i.image) && (
                            <img
                              src={i.image}
                              alt=""
                              className="img-fluid rounded-3 "
                            />
                          )}
                          {isVideo(i.image) && (
                            <video
                              src={i.image}
                              alt=""
                              className="img-fluid rounded-3"
                              autoPlay={true}
                              loop={true}
                              muted={true}
                            />
                          )}
                        </div>
                    </motion.div>
                  );
                })}{" "}
            </motion.div>
          </div>
        </div>
      </div>
      <Section3 />
    </>
  );
}

export default Chrachterdesigns;
