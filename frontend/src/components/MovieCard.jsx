// component functions start with capital letter

function MovieCard({ movie }) {

    function onFavoriteClick() {
        alert("clicked")
    }

  return <div className="movie-card">
      <div className="movie-poster">
        <img src={movie.url} alt={movie.title}/>
        <div className="movie-overlay">
            <buttton className="favorite-btn" onClick={onFavoriteClick}>❤️</buttton>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date}</p>
      </div>
    </div>
}

export default MovieCard 
