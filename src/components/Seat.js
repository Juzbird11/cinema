import { useState } from "react";

function Seat(props) {
    const [status, setStatus] = useState(props.status);
    
    const toggle = () => {
        setStatus(!status);
    }

    return ( 
        <button className={ status ? 'seat' : 'seat seat-sold-out'} onClick={toggle}>
            {props.number}
        </button>
     );
}

export default Seat;