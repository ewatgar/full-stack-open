export const PersonForm = ({ onSubmit, onChangeName, onChangeNumber, nameValue, numberValue }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>name: <input onChange={onChangeName} value={nameValue} /></div>
            <div>number: <input onChange={onChangeNumber} value={numberValue} /></div>
            <div><button type="submit">add</button></div>
        </form>
    )
}