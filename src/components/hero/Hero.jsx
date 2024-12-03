import "./hero.css"

const Hero = () => {
    return <div className="hero">
        <div className="hSection left">
            {/* TITLE */}
            <h1 className="hTitle">Hey There,<br/><span>I'm Jessyca!</span></h1>
            {/* AWARDS */}
            <div className="awards">
                <h2>Top Full Stack Developer</h2>
                <p> More than five years of experience</p>
            </div>
            <div className="awardsList">
                <img src="/award1.png" alt=""/>
                <img src="/award2.png" alt=""/>
                <img src="/award3.png" alt=""/>
            </div>   
        </div>
        {/* SCROOL SVG */}
        <a href="#services">
            
        </a>
        <div className="hSection right">
        </div>
    </div>
    
}

export default Hero