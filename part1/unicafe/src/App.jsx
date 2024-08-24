import { useState } from "react"

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleOnClick = (event) => {
        switch (event.target.id) {
            case 'good':
                setGood(good + 1)
                break;
            case 'neutral':
                setNeutral(neutral + 1)
                break;
            case 'bad':
                setBad(bad + 1)
                break;
        }
    }

    return (
        <>
            <h1>give feedback</h1>
            <div>
                <button onClick={handleOnClick} id="good">good</button>
                <button onClick={handleOnClick} id="neutral">neutral</button>
                <button onClick={handleOnClick} id="bad">bad</button>
            </div>
            <h1>statistics</h1>
            <p>
                good {good}
                <br />
                neutral {neutral}
                <br />
                bad {bad}
            </p>
        </>
    )
}

export default App