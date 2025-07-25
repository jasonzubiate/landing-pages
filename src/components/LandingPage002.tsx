"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function LandingPage002() {
  return (
    <motion.main
      initial={{ padding: 16 }}
      animate={{ padding: 0 }}
      transition={{ duration: 0.8, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
      className="h-screen w-full overflow-hidden bg-stone-200"
    >
      <div className="h-full w-full relative">
        {/* Mask Top */}
        <motion.div
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.8, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
          className="absolute top-0 left-0 bg-stone-200 w-full h-5/12 z-999 will-change-transform origin-top"
        ></motion.div>

        {/* Mask Center */}
        <motion.div
          animate={{ scaleX: [1, 0.66, 0.33, 0, 0] }}
          transition={{
            times: [0, 0.33, 0.66, 1],
            duration: 3,
            delay: 0.5,
            ease: [0.65, 0, 0.35, 1],
          }}
          className="absolute top-5/12 left-0 bg-stone-200 w-full h-2/12 z-999 will-change-transform origin-left"
        ></motion.div>

        {/* Mask Bottom */}
        <motion.div
          animate={{ scaleY: 0 }}
          transition={{ duration: 0.8, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
          className="absolute bottom-0 left-0 bg-stone-200 w-full h-5/12 z-999 will-change-transform origin-bottom"
        ></motion.div>

        <div className="w-full h-full overflow-hidden">
          {/* <motion.div className="absolute top-0 left-0 inset-0 bg-stone-200/20 backdrop-blur-md z-10"></motion.div> */}
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 3.5, ease: [0.65, 0, 0.35, 1] }}
            className="w-full h-full relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1709290649154-54c725bd4484?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              fill
              alt="background"
              className="object-cover object-hidden"
            />
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
