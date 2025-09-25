import React, { useState, useEffect, useRef } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { schooling, certificates } from "../constants";

const Education = () => {
  const { scrollYProgress } = useViewportScroll();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Custom hook to render image on canvas
  const useCanvasImage = (src, width, height) => {
    const canvasRef = useRef(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const img = new Image();
      img.src = src;
      img.crossOrigin = "anonymous"; // optional: prevent some CORS issues
      img.onload = () => {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
      };
    }, [src, width, height]);

    return canvasRef;
  };

  return (
    <section className="max-container relative flex flex-col items-center justify-start py-16">
      {/* Study History */}
      <motion.h1
        className="head-text text-center mb-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Study{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          History
        </span>
      </motion.h1>

      {/* Education Cards */}
      <div className="flex flex-col items-center justify-center gap-8 w-full">
        {schooling.map((school, index) => {
          const start = index / schooling.length;
          const end = (index + 1) / schooling.length;

          const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
          const y = useTransform(scrollYProgress, [start, end], [20, 0]);
          const scale = useTransform(scrollYProgress, [start, end], [0.98, 1]);

          const [clickable, setClickable] = useState(false);
          opacity.onChange((latest) => setClickable(latest >= 0.8));

          const cardContent = (
            <motion.div
              style={{ opacity, y, scale }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
              className="bg-white rounded-2xl p-6 w-full md:w-2/3 lg:w-1/2 cursor-pointer relative mx-auto"
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
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {school.title}
                  </h3>
                  <p className="text-gray-500">{school.degree_name}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">{school.date}</p>
            </motion.div>
          );

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

      {/* Certificates Achieved Title */}
      <div className="flex justify-center items-center gap-4 mt-20 mb-6 w-full">
        <motion.h2
          className="head-text text-black font-semibold"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          Certificates
        </motion.h2>
        <motion.h2
          className="head-text blue-gradient_text font-semibold drop-shadow"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        >
          Achieved
        </motion.h2>
      </div>

      {/* Certificates with Canvas Rendering */}
      <div className="w-full overflow-x-auto hide-scrollbar py-6 px-2 relative">
        <div className="flex gap-6 justify-center flex-wrap">
          {certificates.map((cert, index) => {
            const width = hoveredIndex === index ? 280 : 120;
            const height = hoveredIndex === index ? 280 : 120;
            const canvasRef = useCanvasImage(cert.imageUrl, width, height);

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative rounded-xl cursor-pointer transition-all duration-500`}
                style={{ width: `${width}px`, height: `${height}px` }}
              >
                <canvas
                  ref={canvasRef}
                  className={`rounded-xl w-full h-full transition-all duration-500 ${
                    hoveredIndex === index ? "blur-md" : "blur-sm"
                  }`}
                />

                {/* Text overlay */}
                {hoveredIndex === index && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl text-center p-4">
                    <h3 className="text-black text-lg font-semibold drop-shadow">
                      {cert.title}
                    </h3>
                    <p className="text-black text-sm drop-shadow">
                      {cert.organization}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Education;