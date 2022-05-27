
function Poster({movie}) {
    return ( 
        <div className="poster">
            <div className="theatre-movie">
                <h3>{movie.name}</h3>
                <table className="m-auto">
                    <tbody>
                        <tr>
                            <th>Duration</th>
                            <td>-</td>
                            <td>{movie.duration}</td>
                        </tr>

                        <tr>
                            <th>Release</th>
                            <td>-</td>
                            <td>{movie.release}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="seat-pointer">
                <table className="m-auto">
                    <tbody>
                        <tr>
                            <th><div className="seat-available"></div></th>
                            <td>-</td>
                            <td>Available</td>
                        </tr>

                        <tr>
                            <th><div className="seat-sold-out"></div></th>
                            <td>-</td>
                            <td>Sold Out</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
     );
}

export default Poster;