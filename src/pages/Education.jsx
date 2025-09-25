import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { schooling } from "../constants";

const Education = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <section className="max-container relative min-h-screen flex flex-col items-center justify-start py-16">
      {/* Header */}
      <motion.h1
        className="head-text text-center mb-16"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        Study <span className="blue-gradient_text font-semibold drop-shadow">History</span>
      </motion.h1>

      <div style={{ height: "15vh" }} />

      {/* Cards */}
      <div className="flex flex-col items-center justify-center gap-8 w-full">
        {schooling.map((school, index) => {
          const start = index / schooling.length;
          const end = (index + 1) / schooling.length;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const y = useTransform(scrollYProgress, [start, end], [50, 0]);
          const scale = useTransform(scrollYProgress, [start, end], [0.95, 1]);

          const [clickable, setClickable] = useState(false);

          useMotionValueEvent(opacity, "change", (latest) => {
            setClickable(latest >= 0.8);
          });

          const cardContent = (
            <motion.div
              style={{ opacity, y, scale }}
              whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="bg-white rounded-2xl p-6 w-11/12 md:w-2/3 lg:w-1/2 cursor-pointer relative mx-auto will-change-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-16 h-16 flex justify-center items-center rounded-full"
                  style={{ backgroundColor: school.iconBg }}
                >
                  <img
                    src={school.icon}
                    alt={school.degree_name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">{school.title}</h3>
                  <p className="text-gray-500">{school.degree_name}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{school.date}</p>
            </motion.div>
          );

          // Render <a> only if clickable
          return clickable ? (
            <a
              key={school.degree_name}
              href={school.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              {cardContent}
            </a>
          ) : (
            <div key={school.degree_name} className="w-full">
              {cardContent}
            </div>
          );
        })}
      </div>

      <div style={{ height: `${schooling.length * 80}px` }} />
    </section>
  );
};

export default Education;