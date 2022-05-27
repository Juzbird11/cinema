import { Link } from "react-router-dom";

function MovieCard({movie}) {

    return (
        <Link to='/' state={{ show : movie }} className="movie-card">
            <h2 className="movie-title">{movie.name}</h2>
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
        </Link>
     );
}

export default MovieCard;