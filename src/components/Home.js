import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const buttonVarients = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
      yoyo: Infinity, //сколько раз применять остальные свойсвта
    },
  },
};

const containerVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={containerVarients}
      className="home container"
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVarients} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Home;
