import heroVideo from "../../assets/videos/birds.mp4";
import { useNavigate } from "react-router-dom";
import "../HeroSection/HeroSection.scss";

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
                <video src={heroVideo} autoPlay loop muted playsInline className="hero__video-vd" />
            </div>
        </section>
    );
}

export default HeroSection;