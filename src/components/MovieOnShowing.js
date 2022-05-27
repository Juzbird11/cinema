import MovieCard from './MovieCard';

function MovieOnShowing(props) {
    return ( 
        <div className='p-20'>
            <h2 className='title'>Movie on Showing</h2>
            <div className='movie-card-list'>
                {props.movies.map( (movie, key) => 
                    <MovieCard movie={movie} key={key}/>
                )}
            </div>
        </div>
     );
}

export default MovieOnShowing;