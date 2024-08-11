import { CONTACT } from "../constants"
import { motion } from "framer-motion";

const Contact = () => {
  
    const handleMailtoClick = (e) => {
      e.preventDefault();
      window.location.href = `mailto:${CONTACT.email}`;
    }
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className="font-medium"
            >Thanks for reading till the end!  I would greatly appreciate any feedback you have.</motion.p>
            <motion.p 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}}
            className="my-4"
            >{CONTACT.phoneNo}</motion.p>
            <a href={`mailto:${CONTACT.email}`} className="border-b" onClick={handleMailtoClick}>
          {CONTACT.email}
        </a>
        </div>
    </div>
  )
}

export default Contact
