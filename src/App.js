
import HomePage from "./pages/homePage";
import MoviesPage from "./pages/moviesPage";
import { Route, Routes } from "react-router-dom";
import TvPage from "./pages/tvPage";
import TvdetailsPage from "./pages/tvdetailsPage";
import MoviedetailsPage from "./pages/moviedetailsPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/tv-shows" element={<TvPage />} />
        <Route path="/tv-details" element={<TvdetailsPage />} />
        <Route path="/movie-details" element={<MoviedetailsPage />} />
      </Routes>

    </div>
  );
}

export default App;
