import "./course.css"

export default function Course({title, duration, inPerson, date}) {
    return (
        <div className="course">
            <h3>{title}</h3>
            <ul>
                <li>Duration: {duration}</li>
                <li>In person: {inPerson}</li>
                <li>Start date: {date}</li>
            </ul>
        </div>
    )
}