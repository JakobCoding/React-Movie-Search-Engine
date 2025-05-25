// Create Component for the home page which contains the user interface for the whole app
// To use our MovieCard component we need to import it - ../takes us back to the root directory to access our component
import MovieCard from "../components/MovieCard"
import { useState } from "react";

// Creating a dynamic function (component) to render all of our different movies 
// Defined a const variable named movies and assigned an array of differnt movies to the variable movies

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", release_date: "2020"},
        {id: 2, title: "Terminator", release_date: "1985"},
        {id: 3, title: "The Matrix", release_date: "1999"},
    ];

// How to display these movies in some kind of row using JavaScript .map to dynamically render an array of values
// => is a shortcut to create a function 
// we are using the .map function which is going to iterate over all of the values inside of the array & for every single value its going to take it and pass it to this function. The function then needs to return some JSX code, in this case we are returning our MovieCard component which is going to display this component for every movie. For this to happen we need to idetify a dot key property to the component we're returning. The reason for this is React needs to know which component to update based on the interactions that happen with the web page, so we need to mark every one of these components with a unique id so React can handle the state updates that it typically does aka create React magic. (Can't explain indepth at this learning level - cover that later as I progress)
    
const handleSearch = (e) => {
    e.preventDefault()
    alert(searchQuery)
};


return ( 
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input
            type="text"
            placeholder="Search for movies..."
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>
            <div className="movies-grid">
            {movies.map(movie => movie.title.toLowerCase() .startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id} />))}
        </div>
    </div>
    );
}
// To see this in effect we need to export the home.jsx page and then import it in our App.jsx 

export default Home; 