import "./Journal.scss";
import add from "../../assets/icons/add.svg";

function Journal() {
    return (
        <article className="journal__write">
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
        </article>
    )
}

export default Journal; 