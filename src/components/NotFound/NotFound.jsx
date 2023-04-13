import React from 'react'
import "./NotFound.scss"
import notFound from "../../assets/images/notfound.png";
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <section className="notfound">
            <div className="notfound__wrapper">
                <div className="notfound__text">
                    <h1 className="notfound__title">404</h1>
                    <h3 className="notfound__subtitle">Sorry, page not found</h3>
                </div>
                <div className="notfound__home">
                    <p className="notfound__subtext">The site you're looking for is not here.</p>
                    <Link to="/"> <button className="notfound__btn btn">Go Home </button> </Link>
                </div>
            </div>

            <img className="notfound__img" src={notFound} alt="cute sleeping robot" />
        </section>
    )
}

export default NotFound;
