import React, {Component} from 'react';
import {getMovies} from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import {paginate} from "../utils/paginate";
import {getGenres} from "../services/fakeGenreService";
import ListGroup from "./common/listGroup";


class Movies extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        selectedGenreId: null,
        filteredMovies: []
    };

    componentDidMount() {
        const genres = [{name: "All Movies"}, ...getGenres()]
        this.setState({movies: getMovies(), genres});
    }

    handleDelete(movie) {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});

    };
    handleLike = (movie) => {
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movie};
        movies[index].isLiked = !movies[index].isLiked;
        this.setState({movies});
    };

    handlePageChange = page => {
        this.setState({currentPage : page})
    }
    handleGenreSelect = genre => {
        this.setState({selectedGenreId : genre._id, currentPage: 1});
    }

    render() {
        const {length: count} = this.state.movies;
        const {pageSize, currentPage, movies: allMovies, genres, selectedGenreId} = this.state;
        if (count === 0) { 
            return <p className="mt-4">There are no movies in the database.</p>;
        }
        const filteredMovies = selectedGenreId ? allMovies.filter(m => m.genre._id === selectedGenreId) : allMovies;
        const movies = paginate(filteredMovies, currentPage, pageSize);

        return (
            <div className="row">
                <div className="col-2">
                    <ListGroup items={genres} selectedItemId={selectedGenreId} onItemSelect={this.handleGenreSelect}/>
                </div>
                
                <div className="col-10">
                <p className="mt-4">Showing {filteredMovies.length} movies in the database.</p>
            
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Genre</th>
                            <th>Stock</th>
                            <th>Rate</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map(movie => <tr key={movie._id}>
                            <td>{movie.title}</td>
                            <td>{movie.genre.name}</td>
                            <td>{movie.numberInStock}</td>
                            <td>{movie.dailyRentalRate}</td>
                            <td><Like onLike={() => {this.handleLike(movie)}} isLiked={movie.isLiked} /></td>
                            <td><button className="btn btn-danger btn-sm" onClick={()=>{this.handleDelete(movie)}}>Delete</button></td>
                            </tr>)}
                        </tbody>
                </table>
                <Pagination itemsCount={filteredMovies.length} pageSize={pageSize} currentPage={currentPage} onPageChange={this.handlePageChange}/>
                </div>
            </div>
            );
    }
}

export default Movies;

