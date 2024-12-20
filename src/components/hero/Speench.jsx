import { TypeAnimation } from 'react-type-animation';
import { motion } from 'motion/react'

const Speench = () => {
    return (
        <motion.div 
            className="bubbleContainer"
            animate={{ opacity:[0,1] }}
            transition={{ duration: 1 }}
            >
            <div className="bubble">
            <TypeAnimation
                sequence={[
                    1000,
                    'Hi, Im Jéssyca De Oliveira +5 years experience',
                    1000,
                    'Hi, Im Jéssyca De Oliveira FullStack Developer for more +5 years experience',
                    1000,
                ]}
                wrapper="span"
                speed={40}
                deletionSpeed={60}
                // omitDeletionAnimationv   
                repeat={Infinity}
            />
            </div>
            <img src="/man.png" alt=""/>
        </motion.div>
    )
}

export default Speench