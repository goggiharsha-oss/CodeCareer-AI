import { motion } from "framer-motion";
import { useState } from "react";

function PremiumCard({ children, className = "" }) {

  const [rotate, setRotate] = useState({
    x: 0,
    y: 0,
  });


  const handleMove = (e) => {

    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();


    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    const rotateX = ((y / rect.height) - 0.5) * 15;
    const rotateY = ((x / rect.width) - 0.5) * 15;


    setRotate({
      x: rotateX,
      y: rotateY,
    });

  };


  return (

    <motion.div

      onMouseMove={handleMove}


      onMouseLeave={() =>
        setRotate({
          x:0,
          y:0
        })
      }


      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}


      whileHover={{
        scale:1.05,
        y:-10
      }}


      transition={{
        type:"spring",
        stiffness:200,
        damping:15
      }}


      style={{
        transformStyle:"preserve-3d",
        perspective:1000
      }}


      className={`
        bg-slate-800
        rounded-2xl
        border
        border-cyan-400/20
        shadow-xl
        hover:shadow-cyan-500/40
        transition
        ${className}
      `}

    >

      {children}

    </motion.div>

  );

}


export default PremiumCard;