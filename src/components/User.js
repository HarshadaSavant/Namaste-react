import { useState } from "react";

const User = (props) => {
    const [count] = useState([0]);
    const [count2] = useState([2]);
    
    return(
        <div className="User">
            <h3>Count={count}</h3>
            <h3>Count={count2}</h3>
            <h2>Name:{props.name}</h2>
            <h3>Location:{props.Location}</h3>
            <h3>Contact:harshusavant0311@gmail.com</h3>
        </div>
    )
}
export default User;