import { useState } from "react"


const Button = ({ text, handleOnClick }) => {
    return (
        <button id={text} onClick={handleOnClick}>{text}</button>
    )
}

const StatisticLine = ({ text, value }) => {
    return (
        <tr>
            <td>
                {text}
            </td>
            <td>
                {value} {text === "positive" && " %"}
            </td>
        </tr>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = (good - bad) / all;
    const positive = good / all * 100;

    return (
        <>
            <h1>statistics</h1>
            {all === 0 ? <p>No feedback given</p> :
                <table>
                    <tbody>
                        <StatisticLine text="good" value={good} />
                        <StatisticLine text="neutral" value={neutral} />
                        <StatisticLine text="bad" value={bad} />
                        <StatisticLine text="all" value={all} />
                        <StatisticLine text="average" value={average} />
                        <StatisticLine text="positive" value={positive} />
                    </tbody>
                </table>
            }
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
                <Button text='good' handleOnClick={handleOnClick} />
                <Button text='neutral' handleOnClick={handleOnClick} />
                <Button text='bad' handleOnClick={handleOnClick} />
            </div>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </>
    )
}

export default App