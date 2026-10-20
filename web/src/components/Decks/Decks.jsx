import "./Decks.css"

function Decks() {
    let decks = ["first", "second", "third"];
    return (
        <div className="deck-list">
            {
                decks.map((deck) => {
                    return (<div className="deck">{deck}</div>)
                })
            }
        </div>
    )
}

export default Decks;