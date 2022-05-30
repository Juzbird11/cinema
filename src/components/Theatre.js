import { Fragment } from "react";
import { useLocation } from "react-router-dom";
import Poster from "./Poster";
import Seats from "./Seats";

function Theatre({updateSeat}) {
    const location = useLocation();
    const state = location.state;

    let movie = state && state.show; 

    const toggleStatus = (key) => {
        updateSeat(movie, key);
    }

    if(!movie) {
        return (
            <Fragment>
                <h2 className="title">Theatre</h2>
                <div className="theatre empty-theatre">
                    <h1>Choose Movie</h1>
                </div>
            </Fragment>
        )
    }

    if(!movie.seats || !movie.seats.length) {
        return (
            <Fragment>
                <h2 className="title">Theatre</h2>
                <div className="theatre">
                    <Poster movie={movie} />
                    <div className="empty-seats">
                        <h1>Unavailable Seats</h1>
                    </div>
                </div>
            </Fragment>
        )
    }

    return ( 
        <Fragment>
            <h2 className="title">Theatre</h2>
            <div className="theatre">
                <Poster movie={movie} />
                <Seats seats={movie.seats} toggleStatus={toggleStatus}/>
            </div>
        </Fragment>
     );
}

export default Theatre;