import MovieCard from "./MovieCard";

function ComingSoon() {
    return ( 
        <div className="p-20">
            <h2 className="title">Coming Soon</h2>
            <div className="movie-card-list">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
            </div>
        </div>
     );
}

export default ComingSoon;