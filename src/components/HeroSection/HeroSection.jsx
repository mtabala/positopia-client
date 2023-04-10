import heroVideo from "../../assets/videos/birds.mp4";
import { useNavigate } from "react-router-dom";
import "../HeroSection/HeroSection.scss";
// import { ReactComponent as Waves } from "../../assets/images/waves.svg";
// import wave1 from "../../assets/images/wave1.svg"
// import wave2 from "../../assets/images/wave2.svg"

function HeroSection() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/login")
    }

    return (
        <section className="hero">
            <div className="hero__wrapper">
                <h1 className="hero__title">Welcome to <span className="hero__underline">Positopia</span> 🕊</h1>
                <p className="hero__subtitle">Join our world of positive change and empower yourself and others
                    to make a difference in the world.</p>
                <button className="hero__btn btn" onClick={handleClick}> Join now </button>
            </div>

            <div className="hero__video">
                {/* <Waves className="hero__dark-blue" />
                <Waves className="hero__light-blue" /> */}
                {/* <img className="hero__wave1" src={wave1} />
                <img className="hero__wave2" src={wave2} /> */}
                <video src={heroVideo} autoPlay loop muted playsInline className="hero__video-vd" />
            </div>
        </section>
    );
}

export default HeroSection;