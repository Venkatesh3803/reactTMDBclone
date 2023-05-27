
import HomePage from "./pages/homePage";
import MoviesPage from "./pages/moviesPage";
import { Route, Routes } from "react-router-dom";
import TvPage from "./pages/tvPage";
import TvdetailsPage from "./pages/tvdetailsPage";
import MoviedetailsPage from "./pages/moviedetailsPage";
import UpcomingPage from "./pages/upcomingpage";
import Search from "./pages/searchpage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/up-coming" element={<UpcomingPage />} />
        <Route path="/tv-shows" element={<TvPage />} />
        <Route path="/tv-details" element={<TvdetailsPage />} />
        <Route path="/movie-details" element={<MoviedetailsPage />} />
        <Route path="/search" element={<Search />} />
      </Routes>

    </div>
  );
}

export default App;
