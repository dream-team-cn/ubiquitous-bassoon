import { useState, useEffect } from "react";

const Events = () => {
    const [eventjson, seteventjson] = useState([]);

    const getEvents = async () => {    
        const hope = await fetch("http://localhost:5000/events/");
        const data = await hope.json()
        seteventjson(data);
};
    useEffect(() => {
        getEvents(); 
        }, []);

    return (
        <div>
            {eventjson.map(eventjson => 
            <div>{eventjson.id},{eventjson.date}</div>)}
        </div>
       
    )
  };

//   <div>
//   <h1>Here are the locations we have!</h1>
//   <p>{locationjson.map(locationjson => <div>{locationjson.name}, {locationjson.region}</div>)}</p>
// </div>

export default Events

// [{"id":1,
//         "date":"2009-01-01",
//         "object":"bright white flashing lights",
//         "locationid":1,
//         "createdAt":"2021-07-07T20:34:06.000Z",
//         "updatedAt":"2021-07-07T20:34:06.000Z"}]