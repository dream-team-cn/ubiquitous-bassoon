import { useState } from "react"; 

const Navigation = () => {
    const pageEvents = "events";
    const pageLocations = "locations"; 
    const [page, setPage] = useState([pageEvents])
    const renderEvents = () => (
        <div>
            <h1>Here are all the events from the back end that doesn't work yet... lol.</h1>
        </div>
    )
    const renderLocations = () => (
        <div>
            <h1>Here are the locations (or probs not because it's broke, ha)</h1>
        </div>
    )
    
    const navigateTo = (nextPage) => {
        setPage(nextPage);
    }

    return (
        <div className="navigation">
            <header>
                <button onClick={() => navigateTo(pageEvents)}>Events</button>
                <button onClick={() => navigateTo(pageLocations)}>Locations</button>
            </header>
            {page === pageEvents && renderEvents()}
            {page === pageLocations && renderLocations()}
        </div>
    )
}

export default Navigation;
