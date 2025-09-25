import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar"; // ✅ use same Navbar component
import { published } from "../constants";
import * as Icons from "../assets/icons";

// Array of icons for floating background
const icons = [
  Icons.computer,
  Icons.reactor,
  Icons.renewable_energy,
  Icons.lighting,
  Icons.electricity,
  Icons.battery,
  Icons.cloud,
  Icons.router,
  Icons.cctv,
  Icons.iot,
  Icons.motherboard,
  Icons.tidal,
  Icons.solar_panel,
  Icons.panel,
  Icons.code,
  Icons.cyber_security,
  Icons.binary,
  Icons.idea,
  Icons.technical,
];

const Publication = () => {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // Initialize floating objects
    const objs = icons.map((icon) => {
      const size = 40 + Math.random() * 40;
      return {
        size,
        x: 20 + Math.random() * (window.innerWidth - size - 40),
        y: 20 + Math.random() * (window.innerHeight - size - 40),
        dx: (Math.random() - 0.5) * 1,
        dy: (Math.random() - 0.5) * 1,
        rotation: Math.random() * 360,
        dRotation: (Math.random() - 0.5) * 0.2,
        scale: 0.8 + Math.random() * 0.4,
        dScale: (Math.random() - 0.5) * 0.002,
        src: icon,
      };
    });
    setObjects(objs);

    const animate = () => {
      setObjects((prev) =>
        prev.map((obj) => {
          let newX = obj.x + obj.dx;
          let newY = obj.y + obj.dy;
          let newRotation = obj.rotation + obj.dRotation;
          let newScale = obj.scale + obj.dScale;

          if (newX < 0 || newX > window.innerWidth - obj.size) obj.dx *= -1;
          if (newY < 0 || newY > window.innerHeight - obj.size) obj.dy *= -1;
          if (newScale < 0.8 || newScale > 1.2) obj.dScale *= -1;

          newX = Math.min(Math.max(0, newX), window.innerWidth - obj.size);
          newY = Math.min(Math.max(0, newY), window.innerHeight - obj.size);

          return {
            ...obj,
            x: newX,
            y: newY,
            rotation: newRotation,
            scale: newScale,
          };
        })
      );
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <motion.section
      className="relative w-full min-h-screen overflow-x-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* ✅ Same Navbar as Education */}
      <Navbar />

      {/* Floating icons */}
      {objects.map((obj, index) => (
        <motion.img
          key={index}
          src={obj.src}
          alt="floating object"
          className="fixed z-0 opacity-70 pointer-events-none select-none"
          style={{
            width: `${obj.size}px`,
            height: `${obj.size}px`,
            left: obj.x,
            top: obj.y,
            rotate: obj.rotation,
            scale: obj.scale,
          }}
        />
      ))}

      {/* Heading */}
      <motion.h1
        className="head-text relative z-10 text-center mt-28"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <span className="blue-gradient_text font-semibold drop-shadow">
          Publications
        </span>
      </motion.h1>

      {/* Publication Cards */}
      <div className="py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {published.map((pub, index) => (
            <motion.div
              key={pub.title}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 cursor-pointer border border-gray-200 max-w-sm mx-auto"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={pub.icon}
                  alt={pub.degree_name}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-black text-xl font-poppins font-semibold text-center">
                {pub.title}
              </h3>
              <p className="text-gray-500 text-sm text-center mb-4">
                {pub.date}
              </p>
              <div className="text-center">
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium
                             transition-all duration-300 ease-in-out
                             hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600
                             hover:shadow-md hover:-translate-y-0.5 inline-block text-center"
                >
                  View Publication
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Publication;