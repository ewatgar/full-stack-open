export const Persons = ({ persons, filter }) => {
    return (
        <>
            {persons
                .filter((p) => p.name.toLowerCase().includes(filter.toLowerCase()))
                .map((p) => <div key={p.id}>{p.name} {p.number}</div>)}
        </>
    )
}