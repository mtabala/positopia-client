import "./Journal.scss";
import add from "../../assets/icons/add.svg";

function Journal({ user }) {
    return (
        <article className="journal__write">
            <h2 className="journal__header-first"><span className="journal__underline">My Kindness Journal</span> </h2>

            <div className="journal__title">
                <h4 className="journal__header">Share a story of of kindness that you witnessed</h4>
            </div>

            <form className="journal__form">
                <div className="journal__form-wrapper">
                    <label htmlFor="fileInput" className="journal__label">
                        <img className="journal__icon" src={add} alt="heart icon" />
                    </label>
                    <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                    />

                    <input
                        type="text"
                        placeholder="Title"
                        className="journal__input"
                        autoFocus={true}
                    />
                </div>

                <div className="journal__form-wrapper">
                    <textarea
                        placeholder="Tell your story..."
                        type="text"
                        className="journal__input journal__text"
                    ></textarea>
                </div>

                <button className="journal__btn btn" type="submit">
                    Publish
                </button>
            </form>

            <ul class="journal__list">

                {user && user.journalEntries
                    .map((journalEntry) => (
                        <>
                            <li class="journal__item" key={journalEntry.id}>
                                <div class="journal__comment">
                                    <div class="journal__comment-header">
                                        <p class="journal__name"><span className="journal__underline"> {journalEntry.title} </span></p>
                                        <p class="journal__date">{journalEntry.date}</p>
                                    </div>
                                    <p class="journal__comment-text">{journalEntry.story}</p>
                                </div>
                            </li>
                        </>

                    ))}

            </ul>
        </article>
    )
}

export default Journal; 