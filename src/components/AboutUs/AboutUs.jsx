import "./AboutUs.scss";
import aboutUs from "../../assets/images/aboutUs.jpg";
import { Link } from "react-router-dom";
import { ReactComponent as GitHubIcon } from "../../assets/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/instagram2.svg";

function AboutUs() {
    return (
        <section className="about">
            <article className="about__wrapper">
                <div className="about__text">
                    <h2 className="about__title">About us</h2>
                    <p className="about__info"> Positopia is the app that promotes positivity and encourages acts of kindness! Our app is designed for individuals who want to make a positive impact
                        in their community or the world. Whether you're a socially conscious person or a business looking to encourage positive behavior among your employees,
                        Positopia has something for you.</p>
                    <p className="about__info">
                        Our app's purpose is simple: to promote positivity and kindness by encouraging users to perform daily acts of kindness and share them with others.
                        By doing so, we aim to create a community of like-minded individuals who prioritize kindness and compassion in their daily lives.</p>
                    <button className="about__btn btn"> Join us</button>
                </div>

                <div className="about__links">
                    <p className="about__info"> ↓ Don't be a stranger to Positopia creators: Masha and Simba → </p>
                    <ul className="about__list">
                        <li className="about_item">
                            <Link to="https://github.com/mtabala" className="about__link" target="_blank">
                                <GitHubIcon className="about__icon" />
                            </Link>
                        </li>
                        <li className="about_item">
                            <Link to="https://linkedin.com/in/mtabala" className="about__link" target="_blank">
                                <LinkedInIcon className="about__icon" />
                            </Link>
                        </li>
                        <li className="about_item">
                            <Link to="https://www.instagram.com/masha.travels" className="about__link" target="_blank">
                                <InstagramIcon className="about__icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </article>
            <div className="about__image">
                <img className="about__image-img" alt="" src={aboutUs} />
            </div>

        </section>
    )
}

export default AboutUs;