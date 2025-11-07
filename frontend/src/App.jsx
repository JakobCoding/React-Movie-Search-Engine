import "./App.css";
import MovieCard from "./components/moviecard"

// Component 
function App() {
  return (
    <>
    <MovieCard movie={{title: "Jake's Film", release_date: "2025"}}/>
    <MovieCard movie={{title: "Joes's Film", release_date: "2024"}}/>
    <MovieCard movie={{title: "James's Film", release_date: "2021"}}/>
    <MovieCard movie={{title: "John's Film", release_date: "2020"}}/>
    </>
  );
}

export default App;
