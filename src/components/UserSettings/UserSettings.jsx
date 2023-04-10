import React from 'react'
import UserProfileNav from '../UserProfileNav/UserProfileNav';
import ProfileSettings from '../ProfileSettings/ProfileSettings';
import UserSideBar from '../UserSideBar/UserSideBar';

function UserSettings() {
    return (
        <section className="settings">
            <UserProfileNav />
            <ProfileSettings />
            <UserSideBar />
        </section>
    )
}

export default UserSettings;
