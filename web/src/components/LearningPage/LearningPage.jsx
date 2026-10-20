import AdditionalLearningButtons from "../AdditionalLearningButtons/AdditionalLearningButtons.jsx";
import Decks from "../Decks/Decks.jsx";
import "./LearningPage.css"

function LearningPage() {
    return (
        <div className="left-side">
            <h3 className="title">Decks</h3>
            <hr/>
            <Decks/>
            <hr/>
            <AdditionalLearningButtons/>
        </div>
    )
}

export default LearningPage;