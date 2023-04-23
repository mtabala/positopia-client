// import React, { useState } from 'react';
import "../UserProfile/UserProfile.scss";
import deleteIcon from "../../assets/icons/delete.svg";
import { ReactComponent as DoneIcon } from "../../assets/icons/done.svg";
import defaultImg from "../../assets/images/default.png";

function UserProfile({ id, image, name, description, rank, location, currentActs, onDoneCurrentAct, onDeleteCurrentAct, setCurrentActs, user }) {

    console.log(user)
    // const [done, setDone] = useState(0);

    const deleteCurrentAct = (index) => {
        onDeleteCurrentAct(index);
    }

    const handelDone = (index) => {
        onDoneCurrentAct(index);
    };

    return (
        <>
            <section className="user__profile">
                <article className="user__info">
                    <div className="user__img">
                        <img className="user__avatar" src={image ? image : defaultImg} alt="user avatar" />
                    </div>

                    <div className="user__data">
                        <div className="user__names">
                            <h4 className="user__title">Name</h4>
                            <p className="user__input">{name}</p>
                        </div>

                        <div className="user__ranks">
                            <h4 className="user__title">Rank</h4>
                            <p className="user__input">{rank}</p>
                        </div>

                        <div className="user__location">
                            <h4 className="user__title">Location</h4>
                            <p className="user__input">{location}</p>
                        </div>
                    </div>

                    <div className="user__current">
                        <h4 className="user__title"> Current Acts of Kindness: </h4>
                        <ul className="user__acts-list">
                            {currentActs.map((act, index) => (
                                <li key={act} className="user__input user__input--acts">
                                    ◊ {act}
                                    <div className="user__input-icons">
                                        <DoneIcon onClick={() => handelDone(index)} className="user__icon user__icon--done" />
                                        <img
                                            className="user__icon user__icon--delete"
                                            src={deleteIcon}
                                            id={id}
                                            alt="delete icon"
                                            onClick={() => deleteCurrentAct(index)}
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>

                <div className="user__info">
                    <div className="user__about">
                        <h4 className="user__title">About me</h4>
                        <p className="user__input">{description}</p>
                    </div>

                    <div className="user__stats">
                        <h4 className="user__title"> Stats</h4>
                        {user && <p className="user__input"> {user.completedActs.length} Acts of Kindness completed</p>}

                    </div>

                </div>
            </section>
        </>
    )
}

export default UserProfile;
