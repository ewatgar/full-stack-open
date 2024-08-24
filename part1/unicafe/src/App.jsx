import { useState } from "react"

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good - bad) != 0 ? (good - bad) / all : 0;
    const positive = good != 0 ? good / all * 100 : 0;

    return (
        <>
            <h1>statistics</h1>
            <div id="stats-list">
                <div>good {good}</div>
                <div>neutral {neutral}</div>
                <div>bad {bad}</div>
                <div>all {all}</div>
                <div>average {average}</div>
                <div>positive {positive} %</div>
            </div>
        </>
    )
}

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
            <div id="button-list">
                <button onClick={handleOnClick} id="good">good</button>
                <button onClick={handleOnClick} id="neutral">neutral</button>
                <button onClick={handleOnClick} id="bad">bad</button>
            </div>
            <Statistics
                good={good}
                neutral={neutral}
                bad={bad} />
        </>
    )
}

export default App