import "./UserSideBar.scss"

function UserSideBar({ name, rank, location, description, image }) {


    return (
        <aside className="sidebar">

            <div className="sidebar__item">
                <h3 className="sidebar__title">About Me</h3>
                <img className="sidebar__img" src={image} alt="user" />
                <p className="sidebar__text">{description}</p>
            </div>

            <div className="sidebar__item">
                <h6 className="sidebar__title">Info</h6>
                <ul className="sidebar__list">
                    <li className="sidebar__list-item"><span className="sidebar__list-title">Name:</span> {name} </li>
                    <li className="sidebar__list-item"><span className="sidebar__list-title">Rank:</span> {rank}</li>
                    <li className="sidebar__list-item"><span className="sidebar__list-title">Location:</span> {location} </li>
                </ul>
            </div>
        </aside>
    )

}

export default UserSideBar;