// Make a New Component 
// This component / function accepts a prop / object called movie which contains all the information about the movie
// movie infomation can represent the title, release date, image  
// {} inside a componant represents somthing that can be dynamically changed or referenced as a variable 

function MovieCard({movie}) {

    function onFavoriteClick() {
        alert("clicked");
    }

    return <div className="movie-card">

        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/> 
            
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>♥</button>
            </div>
        </div>
        
        <div className="movie.info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>

    </div>
}

// To use this movie card component or access it from another file we need to export it see below:

export default MovieCard