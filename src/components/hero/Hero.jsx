import "./hero.css";
import Speench from "./Speench";

const Hero = () => {
    return (
    <div className="hero">
        <div className="hSection left">
            {/* TITLE */}
            <h1 className="hTitle">Hey There,<br/><span>I'm Jessyca!</span></h1>
            {/* AWARDS */}
            <div className="awards">
                <h2>Top Full Stack Developer</h2>
                <p> More than five years of experience More than five years of experience.</p>
            </div>
            <div className="awardsList">
                <img src="/award1.png" alt=""/>
                <img src="/award2.png" alt=""/>
                <img src="/award3.png" alt=""/>
            </div> 
                    {/* SCROOL SVG */}
        <a href="#services" className="scroll">
        <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
                stroke="white"
                strokeWidth="1"
            />
            <path
                d="M12 5V8"
                stroke="white"
                strokeWidth="1"
                strokeLinecap="round"
            >
            </path>
        </svg>
        </a>  
        </div>
        <div className="hSection right">
            {/* FOLLOW */}
            <div className="follow">
                <a href="/">
                    <img src="/instagram.png"></img>
                </a>
                <a href="/">
                    <img src="/facebook.png"></img>
                </a>
                <a href="/">
                    <img src="/youtube.png"></img>
                </a>
                <div className="followTextContainer">
                    <div className="FollowText">Follow me</div>
                </div>
            </div>
            {/* BUBLLE */}
            <Speench/>
            {/* CERTIFICATE */}
            <div className="certificate">
                <img src="/certificate.png" alt=""/>
                LMA CERTIFICED
                <br />
                PROFESSIONAL
                <br/>
                UI DESIGNER
            </div>
            {/* CONTACT BUTTOM */}
            <a href="/#contact" className="contactLink">
                <div className="contactButton">
                    <svg viewBox="0 0 200 200" width="150" height="150">
                        <circle cx="100" cy="100" r="90" fill="pink"/>
                        <path
                            id="innerCirclePath"
                            fill="none"
                            d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120 0"
                        />
                        <text className="circleText">
                            <textPath href="#innerCirclePath">Hire Now</textPath>
                        </text>
                        <text className="circleText">
                            <textPath href="#innerCirclePath" startOffset="40%">Contate me</textPath>
                        </text>
                    </svg>
                    <div className="arrow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="50"
                            height="50"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                        >
                            <line x1="6" y1="18" x2="18" y2="6" />
                            <polyline points="9 6 18 6 18 15" />
                        </svg>
                    </div>
                </div>
            </a>
        </div>
        <div className="bg">
            {/* 3d */}
            <div className="hImg">
                <img src="/hero1.gif" alt=""/>
            </div>
        </div>
    </div>
    );
};

export default Hero