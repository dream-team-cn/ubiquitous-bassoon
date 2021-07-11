import Login from "../Login/login"
import Logout from "../Login/logout"
import { useState, useEffect } from "react"; 

const Header = () => {

    const [user, setUser] = useState()

    const getUser = async () => {
        const response = await fetch("http://localhost:5000/user", {
          method: "GET",
          headers: { Authorization: `Bearer ${localStorage.getItem("MyToken")}` },
        });
        const data = response.json();
        // data.user;
      };

    return (
        <div>
            <div>{user ? <Logout /> : <Login />}</div>
            

        <div className={"navigation"}>
            <a href=" /">Home</a>
            <a href="/events">Events</a>
            <a href="/locations">Locations</a>
            <a href="/logactivity">Log Activity</a>
        </div>
        </div>
    )
}

export default Header
