import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)                               //anecdotes index
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))      //num of votes of specific index

  const handleGenerate = () => {
    const index = Math.floor(Math.random() * anecdotes.length);
    setSelected(index);
  }

  const handleVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const getMostVotedAnecdote = () => {
    const maxVotes = Math.max(...votes);
    const maxIndex = votes.indexOf(maxVotes);
    console.log(`votes array: ${votes}`)
    return anecdotes[maxIndex];
  }

  return (
    <>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <button onClick={handleVote}>vote</button>
      <button onClick={handleGenerate}>next anecdote</button>
      <h2>Anecdote with most votes</h2>
      <p>{getMostVotedAnecdote()}</p>
    </>
  )
}

export default App