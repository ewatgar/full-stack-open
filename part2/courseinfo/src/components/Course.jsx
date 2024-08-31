export const Course = ({ course }) => {
    return (
        <>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </>
    )
}

const Header = ({ name }) => {
    return <h2>{name}</h2>
}

// Content ----------------------------------------------------------------------------

const Content = ({ parts }) => {
    return (
        <>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
            <Total parts={parts} />
        </>
    )
}

const Part = ({ name, exercises }) => {
    return <p>{name} {exercises}</p>
}

const Total = ({ parts }) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <p><b>total of {total} exercises</b></p>
}
