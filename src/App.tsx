import courses from "./courses.tsx";
import studyGroups from './studyGroups.tsx';
import './App.css'

type Course = {
    id: number;
    studyGroupId: number;
    title: string;
    keywords: string[];
    eventType: string;
};

type StudyGroup = {
    id: number;
    courseId: number;
    title: string;
    keywords: string[];
    eventType: string;
};

type SearchEventsOption = {
    query: string | number;
    eventType: 'courses' | 'studyGroups';
};

function searchEvents(options: SearchEventsOption) {
    const events = options.eventType === 'courses' ? courses : studyGroups;
    const search = options.query.toString().toLowerCase();
    return events.filter((event: Course | StudyGroup) => {
            if (typeof options.query === 'number') {
                return event.id === options.query;
            } else {
                return event.title.toString().toLowerCase().includes(search);
            }
        }
    );
}

let enrolledEvents: (Course | StudyGroup)[] = [];


function enroll(event: Course | StudyGroup) {
    enrolledEvents = [...enrolledEvents, event];
}

console.log(searchEvents({ query: 'art', eventType: 'courses' }));

const searchResults = searchEvents({ query: 'art', eventType: 'courses' });

if (searchResults.length > 0) {
    enroll(searchResults[0]);
    console.log('Enrolled events:', enrolledEvents[0]);
}

function App() {
    const filteredEvents = searchEvents({ query: 1, eventType: 'courses' });

    return (
        <>
            <h1>Study Groups</h1>
            <h1>Courses</h1>
            <ul>
                {filteredEvents.map((event: Course | StudyGroup) => (
                    <li key={event.id}>
                        <h2>{event.title}</h2>
                        <p>Keywords: {event.keywords.join(', ')}</p>
                        <p>Event Type: {event.eventType}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
