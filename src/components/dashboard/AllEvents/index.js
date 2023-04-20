import Link from "next/link"
const AllEvents = ({ date, month, name }) => {
    return (
        <div className="event-wrapp">
            <div className="event__date">
                <h3>{date}</h3>
                <h4>{month}</h4>
            </div>
            <h3 className="event__name">{name}</h3>
            <Link href="/">View Details</Link>
        </div>
    )
}

export default AllEvents