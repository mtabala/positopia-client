import React from 'react'

function KindAct({ kindActImage, kindActDescription, kindActTitle }) {
    return (
        <article className="kindness__act">
            <div className="kindness__act-wrapper">
                <div className="kindness__text">
                    <h3 className="kindness__title">{kindActTitle}</h3>
                    <p className="kindness__description"> {kindActDescription}</p>
                </div>
                <img className="kindness__img" src={kindActImage} />
            </div>

            <button className="kindness__btn">Select</button>
        </article>
    )
}

export default KindAct;
