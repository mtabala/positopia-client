import React from 'react'
import "../KindAct/KindAct.scss"
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function KindAct({ kindActImage, kindActDescription, kindActTitle }) {
    const api = "http://localhost:8000";

    const location = useLocation();
    const selectedAct = location.state;
    const navigate = useNavigate();

    const handleClick = () => {

        const userId = sessionStorage.getItem('userId')
        if (userId) {


            axios
                .post('http://localhost:8000/profile/journal', {
                    kindActTitle: kindActTitle,
                    id: userId,
                })
                .then(res => {
                    const selectedAct = res.data;
                    navigate("/journal", { state: selectedAct });
                })
        }
    }

    return (
        <article className="kindness__act">
            <div className="kindness__act-wrapper">
                <img className="kindness__img" src={kindActImage} />
            </div>

            <div className="kindness__text">
                <h3 className="kindness__title">{kindActTitle}</h3>
                <p className="kindness__description"> {kindActDescription}</p>
            </div>

            <button onClick={handleClick} className="kindness__btn">Select</button>
        </article>
    )
}

export default KindAct;
