"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="relative text-stone-900">
      <nav className="fixed top-4 left-3 flex flex-col gap-px z-50">
        <div className="overflow-hidden leading-none">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 4,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="font-mono uppercase text-sm tracking-tight leading-none"
          >
            [1] Work
          </motion.p>
        </div>
        <div className="overflow-hidden leading-none">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 4.1,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="font-mono uppercase text-sm tracking-tight leading-none"
          >
            [2] Archive
          </motion.p>
        </div>
        <div className="overflow-hidden leading-none">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 4.2,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="font-mono uppercase text-sm tracking-tight leading-none"
          >
            [3] About
          </motion.p>
        </div>
        <div className="overflow-hidden leading-none">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.5,
              delay: 4.3,
              ease: [0.65, 0, 0.35, 1],
            }}
            className="font-mono uppercase text-sm tracking-tight leading-none"
          >
            [4] Contact
          </motion.p>
        </div>
      </nav>

      <motion.button
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 4,
          ease: [0.65, 0, 0.35, 1],
        }}
        className="fixed top-4 right-4 z-50 cursor-pointer"
      >
        <img src="/circle-01.svg" alt="" className="h-8 w-8" />
      </motion.button>

      <div className="absolute left-0 top-1/2 translate-y-1/2 w-screen h-screen bg-stone-900">
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0 0)" }}
          transition={{
            duration: 1.5,
            delay: 4,
            ease: [0.83, 0, 0.17, 1],
          }}
          className="w-full h-full relative"
        >
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 1,
              delay: 4.1,
              ease: [0.83, 0, 0.17, 1],
            }}
            className="w-full h-full relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1519913564575-d65ecde9d7f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="background"
              fill
              className="object-cover object-[0%_200%]"
            />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, "-11%", "-32%", "-50%"] }}
        transition={{
          duration: 4,
          delay: 0.3,
          ease: [0.65, 0, 0.35, 1],
          times: [0, 0.25, 0.5, 0.75],
        }}
        className="absolute inset-0 w-screen h-screen bg-[#E1E1D8]"
      >
        <div className="flex items-end w-full h-full p-4">
          <div className="absolute bottom-6 left-6 overflow-hidden">
            <p className="flex text-[240px] font-semibold leading-[0.9] tracking-tight select-none">
              <motion.span
                animate={{ y: "-100%" }}
                transition={{
                  duration: 0.65,
                  delay: 0.5,
                  ease: [0.65, 0, 0.35, 1],
                }}
              >
                0
              </motion.span>
              <motion.span
                animate={{ y: "-100%" }}
                transition={{
                  duration: 0.65,
                  delay: 0.6,
                  ease: [0.65, 0, 0.35, 1],
                }}
              >
                0
              </motion.span>
            </p>
          </div>
          <div className="absolute bottom-6 left-6 overflow-hidden">
            <p className="flex text-[240px] font-semibold leading-[0.9] tracking-tight select-none">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: ["100%", 0, "-100%"] }}
                transition={{
                  duration: 1.5,
                  delay: 0.6,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.5, 1],
                }}
              >
                2
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: ["100%", 0, "-100%"] }}
                transition={{
                  duration: 1.5,
                  delay: 0.7,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.5, 1],
                }}
              >
                2
              </motion.span>
            </p>
          </div>
          <div className="absolute bottom-6 left-6 overflow-hidden">
            <p className="flex text-[240px] font-semibold leading-[0.9] tracking-tight">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: ["100%", 0, "-100%"] }}
                transition={{
                  duration: 1.5,
                  delay: 1.5,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.5, 1],
                }}
              >
                6
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: ["100%", 0, "-100%"] }}
                transition={{
                  duration: 1.5,
                  delay: 1.6,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.5, 1],
                }}
              >
                4
              </motion.span>
            </p>
          </div>
          <div className="absolute bottom-6 left-6 overflow-hidden">
            <p className="flex text-[240px] font-semibold leading-[0.9] tracking-tight">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: ["100%", 0, "-100%"] }}
                transition={{
                  duration: 1.5,
                  delay: 2.3,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.5, 1],
                }}
              >
                9
              </motion.span>
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: ["100%", 0, "-100%"] }}
                transition={{
                  duration: 1.5,
                  delay: 2.4,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.5, 1],
                }}
              >
                9
              </motion.span>
            </p>
          </div>

          <div className="absolute bottom-40 left-4 right-4 grid grid-cols-12 gap-4">
            <div className="col-span-3">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 4.4,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="font-mono uppercase text-sm tracking-tight leading-tight"
                >
                  Davide Prouvé
                </motion.p>
              </div>
            </div>
            <div className="flex flex-col col-span-3">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 4.4,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="font-mono uppercase text-sm tracking-tight leading-tight"
                >
                  Director of Photography
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 4.5,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="col-span-3 font-mono uppercase text-sm tracking-tight leading-tight"
                >
                  Madein Studio
                </motion.p>
              </div>
            </div>

            <div className="col-span-3 flex flex-col">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 4.4,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="col-span-3 font-mono uppercase text-sm tracking-tight leading-tight"
                >
                  Fashion, Editorial, Portrait, Landscape,
                </motion.p>
              </div>
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 4.5,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="col-span-3 font-mono uppercase text-sm tracking-tight leading-tight"
                >
                  Still Life, Product, Entertainment
                </motion.p>
              </div>
            </div>

            <div className="col-start-12 col-span-1">
              <div className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 4.4,
                    ease: [0.65, 0, 0.35, 1],
                  }}
                  className="font-mono uppercase text-sm tracking-tight leading-tight justify-self-end"
                >
                  2025
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
