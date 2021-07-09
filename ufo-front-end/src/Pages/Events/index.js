import { useState, useEffect } from "react";

const Events = () => {
    const [eventjson, seteventjson] = useState([]);

    const getEvents = async () => {    
        const hope = await fetch("http://localhost:5000/events/");
        const data = await hope.json()
        seteventjson(data);
};
    return (
        <div>
            {eventjson.map(event => 
            <div key={event.id}>{event.date}</div>)}
        </div>
    )
  };

export default Events

// [{"id":1,
//         "date":"2009-01-01",
//         "object":"bright white flashing lights",
//         "locationid":1,
//         "createdAt":"2021-07-07T20:34:06.000Z",
//         "updatedAt":"2021-07-07T20:34:06.000Z"}]