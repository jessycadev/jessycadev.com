import { motion } from "motion/react"

const shapeVariants = {
    initialRect:{
        x:-100,
        opacity:0
    },
    animateRect:{
        x:0,
        opacity:1,
        transition:{
            duration:2,
        },
    },
    initialCirc:{
        y:-100,
        opacity:0
    },
    animateCirc:{
        y:0,
        opacity:1,
        transition:{
            duration:3,
        },
    },
};

const listVariantes = {
    initial: {
        x:-100,
        y:-100,
        opacity:0,
    },
    animate: {
        x: 0,
        y: 0,
        opacity:0,
        transition: {
            duration: 3,
            staggerChildren: 1,
        },
    },
};

const Text = () => {
    return (
        <section style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
            <motion.div
            variants={shapeVariants}
            initial="initialRect"
            animate="animateRect"
            style={{width:300, height:300, background:"red"}}           
            >   
            </motion.div>
            <motion.div
            variants={shapeVariants}
            initial="initialCirc"
            animate="animateCirc"
            style={{width:300, height:300, background:"green", borderRadius:"100%"}}
            >
            </motion.div>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>JavaScript</li>
                <li>Next.js</li>
            </ul>  
        </section>
    )
}

export default Text;