import React from 'react'
import "../UserProfile/UserProfile.scss"

function UserProfile({ userImage, userName, userDescription }) {
    return (
        <>
            <div className="user__profile">
                <h3 className="user__name">{userName}</h3>
                <img className="user__img" src={userImage}></img>
            </div>

            <div className="user__bio">
                <h3 className="user__name"> About me: </h3>
                <p className="user__description">{userDescription}</p>
            </div>
        </>
    )
}

export default UserProfile;