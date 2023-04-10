import Journal from "../Journal/Journal";
import UserProfileNav from "../UserProfileNav/UserProfileNav";

import "./KindnessJournal.scss";

function KindnessJournal() {
    return (
        <>
            <section className="journal">
                <UserProfileNav />

                <Journal />
            </section>
        </>
    )
}

export default KindnessJournal;
