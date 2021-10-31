import _ from "lodash";
import { useEffect, useState } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMovieService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Pagination from "./common/pagination";
import MoviesTable from "./moviesTable";

const Movies = () => {
  //UseState declarations
  const [movies, setMovies] = useState([]);
  const [currentPage, setPage] = useState(1);
  const pageSize = 10;
  const [liked, setLiked] = useState(movies);
  const [genres, setGenres] = useState([]);
  const [genre, selectGenre] = useState(genres[0]);
  const [sortColumn, setSort] = useState({ path: "title", order: "asc" });

  //UseEffect declarations for api loading and setLiked
  useEffect(() => {
    setMovies(getMovies());
    setGenres([{ _id: "", name: "All Genres" }, ...getGenres()]);
  }, []);

  useEffect(()=>{
    setLiked(movies);
  },[movies]);

  //Functions for handling actions
  const handleDelete = (movie) => {
    setMovies(movies.filter((m) => m._id !== movie._id));
  };

  const handleLike = (movie) => {
    const movieArrayForUpdatingLikes = [...liked];
    const index = movieArrayForUpdatingLikes.indexOf(movie);
    movieArrayForUpdatingLikes[index].liked =
      !movieArrayForUpdatingLikes[index].liked;
    setLiked(movieArrayForUpdatingLikes);
  };

  const handlePageChange = (page) => {
    setPage(page);
  };

  const handleGenreSelect = (genre) => {
    selectGenre(genre);
    setPage(1);
  };

  const handleSort = (newSortColumn) => {
    setSort(newSortColumn);
  };

  //Other conditionals for array display
  if (movies.length === 0) return <p>There are no movies in the database.</p>;

  const moviesGenreFilter =
    genre && genre._id
      ? movies.filter((m) => m.genre._id === genre._id)
      : movies;

  const sorted = _.orderBy(
    moviesGenreFilter,
    [sortColumn.path],
    [sortColumn.order]
  );

  const moviesView = paginate(sorted, currentPage, pageSize);

  return (
    <main className='container'>
      <div className='row'>
        <div className='col-3'>
          <ListGroup
            items={genres}
            onItemSelect={handleGenreSelect}
            selectedItem={genre}
          />
        </div>
        <div className='col'>
          <div>Showing {moviesGenreFilter.length} movies in the database.</div>
          <MoviesTable
            movies={moviesView}
            sortColumn={sortColumn}
            onDelete={handleDelete}
            onLike={handleLike}
            onSort={handleSort}
          />
          <Pagination
            itemCount={moviesGenreFilter.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </main>
  );
};

export default Movies;
