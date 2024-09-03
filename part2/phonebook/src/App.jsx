import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleOnSubmitForm = (event) => {
    event.preventDefault();
    if (persons.some((p) => p.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = { name: newName, number: newNumber };
      setPersons([...persons, newPerson]);
    }
    setNewName('');
    setNewNumber('');
  };

  const handleOnChangeFilterInput = (event) => setFilter(event.target.value);
  const handleOnChangeNameInput = (event) => setNewName(event.target.value);
  const handleOnChangeNumberInput = (event) => setNewNumber(event.target.value);

  return (
    <div>
      <div>debug filter: {filter}</div>
      <div>debug name: {newName}</div>
      <div>debug number: {newNumber}</div>
      <h2>Phonebook</h2>
      <div>filter shown with <input onChange={handleOnChangeFilterInput} value={filter} /></div>
      <h2>Add new number</h2>
      <form onSubmit={handleOnSubmitForm}>
        <div>name: <input onChange={handleOnChangeNameInput} value={newName} /></div>
        <div>number: <input onChange={handleOnChangeNumberInput} value={newNumber} /></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      {persons
        .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
        .map((p) => <div key={p.name}>{p.name} {p.number}</div>)}
    </div>
  );
};

export default App;