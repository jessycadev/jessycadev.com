import { TypeAnimation } from 'react-type-animation';

const Speench = () => {
    return (
        <div className="bubbleContainer">
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
        </div>
    )
}

export default Speench