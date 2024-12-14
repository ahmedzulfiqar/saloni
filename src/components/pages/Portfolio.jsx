import React from "react";
import Section3 from "../sections/Section3";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
function Portfolio() {
  const location = useLocation();
  const { data } = location.state || {};
  return (
    <>
      <div className="col-12">
        <div className=" container position-static">
          <div className="row m-0 py-5 my-5">
            <div className="col-lg-6 col-12 pb-3">
              <div className="display-3 fontitalic">
                {data.textheading && data.textheading}
              </div>
            </div>{" "}
            <div className="col-lg-6 col-12 pb-5 mb-5">
              <p className="py-3 fs-4 fontitalic">
                {data.paragraph && data.paragraph}
              </p>
            </div>
            <motion.div
              className="row m-0 pt-4 position-relative justify-content-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              {data.data &&
                data.data.map((i, index) => {
                  const delay = Math.floor(index / 4) * 1;

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
                      className={` ${
                        data.newdata ? " col-lg-6 " : "col-lg-6 "
                      }col-md-6 col-12 px-lg-4 py-lg-4 px-0 py-2 de position-relative`}
                      transition={{
                        duration: 1,
                        delay: delay,
                      }}
                    >
                      <Tilt
                        tiltReverse={true}
                        tiltMaxAngleX={7}
                        tiltMaxAngleY={7}
                      >
                        <div className="">
                          {isImage(i) && (
                            <img
                              src={i}
                              alt=""
                              className="img-fluid rounded-3 "
                            />
                          )}
                          {isVideo(i) && (
                            <video
                              src={i}
                              alt=""
                              className="img-fluid rounded-3"
                              autoPlay={true}
                              loop={true}
                              muted={true}
                            />
                          )}
                        </div>
                      </Tilt>
                    </motion.div>
                  );
                })}{" "}
            </motion.div>{" "}
            <motion.div
              className="row m-0 pt-5 mt-5 position-relative justify-content-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 1,
              }}
            >
              {data.newdata &&
                data.newdata.map((i, index) => {
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
                      <Tilt
                        tiltReverse={true}
                        tiltMaxAngleX={7}
                        tiltMaxAngleY={7}
                      >
                        <div className="">
                          {isImage(i) && (
                            <img
                              src={i}
                              alt=""
                              className="img-fluid rounded-3 "
                            />
                          )}
                          {isVideo(i) && (
                            <video
                              src={i}
                              alt=""
                              className="img-fluid rounded-3"
                              autoPlay={true}
                              loop={true}
                              muted={true}
                            />
                          )}
                        </div>
                      </Tilt>
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

export default Portfolio;
