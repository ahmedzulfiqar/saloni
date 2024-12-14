import React from "react";
import Section1 from "../sections/Section1";
import Section2 from "../sections/Section2";
import Section3 from "../sections/Section3";
import { motion, useViewportScroll, useTransform } from "framer-motion";
function Home() {
  const offset = 1500;
  return (
    <>
  
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  );
}

export default Home;
