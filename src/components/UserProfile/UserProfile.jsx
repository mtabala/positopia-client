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
                <div className="user__wrapper">
                    <h3 className="user__name"> About me: </h3>
                    <p className="user__description">{userDescription}</p>
                </div>

                <div className="user__wrapper">
                    <div className="user__current-acts">
                        <img />
                        <h3> Share a meal </h3>
                        <p> Cook a meal for someone who can use help. </p>
                    </div>

                    <div className="user__completed-acts">
                        <img />
                        <p>23 acts of kindness completed! Way to go!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;