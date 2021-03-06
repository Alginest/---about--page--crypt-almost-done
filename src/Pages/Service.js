import React from "react";
import { motion } from "framer-motion";
const Service = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      Service
    </motion.div>
  );
};

export default Service;
