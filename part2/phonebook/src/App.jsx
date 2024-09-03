import { useState } from 'react';
import { Filter } from './components/Filter';
import { PersonForm } from './components/PersonForm';
import { Persons } from './components/Persons';

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
      //const lastId = 
      //const newPerson = { name: newName, number: newNumber, id:  };
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
      <Filter onChange={handleOnChangeFilterInput} value={filter} />

      <h3>Add new number</h3>
      <PersonForm
        onSubmit={handleOnSubmitForm}
        onChangeName={handleOnChangeNameInput}
        onChangeNumber={handleOnChangeNumberInput}
        nameValue={newName}
        numberValue={newNumber}
      />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
    </div>
  );
};

export default App;