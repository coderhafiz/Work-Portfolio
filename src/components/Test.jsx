import { useRef } from "react"
import { motion } from "framer-motion"

const Test = () => {

    // const divRef = useRef()

    // const show = () => {

    //    let element = divRef.current.classList.toggle("hidden");
       


    // }

    const boxVariants = {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
      hover: { scale: 1.1, transition: { yoyo: Infinity, duration: 0.3 } },
    };

  return (
    

    <div className="min-h-[500px] flex justify-evenly">
    {/* <div ref={divRef} className="hidden">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime, facere ipsam nostrum quasi repellat eum voluptas? Non commodi expedita, veniam consequatur, dolores, quidem corrupti nobis omnis nostrum dolore eos exercitationem?
    </div>
    <button onClick={show} >show</button> */}
    {/* <motion.div 
    className="flex gap-1 m-10 h-[500px]" 
    >

      <motion.div
      animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }} className="w-[100px] h-[100px] bg-cyan-400 hover:w-[200px] hover:h-[200px] hover:inline-block"></motion.div>
      <motion.div
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }} className="w-[100px] h-[100px] bg-cyan-400 hover:w-[200px] hover:h-[200px] hover:inline-block"></motion.div>
      <motion.div
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }} className="w-[100px] h-[100px] bg-cyan-400 hover:w-[200px] hover:h-[200px] hover:inline-block"></motion.div>
      <motion.div
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }} className="w-[100px] h-[100px] bg-cyan-400 hover:w-[200px] hover:h-[200px] hover:inline-block"></motion.div>
      <motion.div
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }} className="w-[100px] h-[100px] bg-cyan-400 hover:w-[200px] hover:h-[200px] hover:inline-block"></motion.div>
      <motion.div
       animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }} 
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 1.1 }}
      drag="x"
      dragConstraints={{ left: -100, right: 100 }} className="w-[100px] h-[100px] bg-cyan-400 hover:w-[200px] hover:h-[200px] hover:inline-block"></motion.div>
    </motion.div> */}


          <motion.div
            className="w-[100px] h-[100px] bg-cyan-400 hover:w-[200px] hover:h-[200px] hover:inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}


            />


  <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    className="w-[100px] h-[100px] bg-cyan-600"
  />

<motion.div
    variants={boxVariants}
    initial="hidden"
    animate="visible"
    whileHover="hover"
    className="w-[100px] h-[100px] bg-blue-500 m-auto"
  />

<motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
     className="w-[100px] h-[100px] bg-blue-500 m-auto"
  />


  <img loading="lazy" src="IMG-20240430-WA0021.jpg" alt="" />


  





    </div>
  )
}

export default Test