import { motion } from "framer-motion";
import React, { useState } from "react";

const containerVarients = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4, // тяжесть компонента
      damping: 8,
      when: "beforeChildren", //animation orkestration
      staggerChildren: 0.4, //для каждого ребенка анимация 0.4 секунды
    },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const childVarients = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);

  setTimeout(() => setShowTitle(!showTitle), 4000);
  return (
    <motion.div
      className="container order"
      variants={containerVarients}
      initial="hidden"
      animate="visible"
      exit='exit'
    >
      <h2 exit={{ y: -100 }}>Thank you for your order :)</h2>

      <motion.p variants={childVarients}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVarients}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
