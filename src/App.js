import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import MovieOnShowing from './components/MovieOnShowing';
import Theatre from './components/Theatre';


function App() {
  const dummyDatas = [
    { name: 'Fantastic Beasts', duration: '2hr 12m', release: '2022', seats: Array(8).fill(true)},
    { name: 'Dr Strange', duration: '1hr 12m', release: '2022', seats: Array(20).fill(true)},
    { name: 'Thor:Love and Thunder', duration: '1hr 18m', release: '2021', seats: Array(5).fill(true)},
    { name: 'Joker', duration: '1hr 18m', release: '2020', seats: Array(10).fill(true)},
    { name: 'Once upon a time in hollywood', duration: '1hr 18m', release: '2020'},
  ];

  const [movies, setMovies] = useState(dummyDatas);

  const toggleStatus = (movie, seat) => {
    movie.seats[seat] = !movie.seats[seat];

    setMovies([...movies]);
  }

  return (
    <div className="App">
      <MovieOnShowing movies={movies} />
      <Routes>
        <Route path="/" element={<Theatre updateSeat={toggleStatus} />} />
      </Routes>
    </div>
  );
}

export default App;
