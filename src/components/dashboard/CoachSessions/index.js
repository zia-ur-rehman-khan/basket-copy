import Link from 'next/link'
import AllEvents from '../AllEvents'

// My Sessions Data
const createdSessions = [
    {
        id: 1,
        date: 16,
        month: 'Feb',
        name: 'Eventions Parade Festivities',
    },
]

// Booked
const completedSessions = [
    {
        id: 1,
        date: 16,
        month: 'Feb',
        completed: true,
        name: 'Eventions Parade Festivities',
    },
    {
        id: 2,
        date: 16,
        month: 'Feb',
        completed: true,
        name: 'Eventions Parade Festivities',
    },
]

const CoachSessions = () => {
    return (
        <div>
            <h3 className='color__light head__sm'>Created Sessions</h3>
            {
                createdSessions.map(session => <AllEvents date={session.date} month={session.month} name={session.name} />)
            }
            <h3 className='color__light head__sm'>Completed</h3>
            {
                completedSessions.map(session => <AllEvents date={session.date} month={session.month} isCompleted={session.completed} name={session.name} />)
            }
            <Link href="/coach/create-session"><a className='primary__btn full__w'>Create Session</a></Link>
        </div>
    )
}

export default CoachSessions