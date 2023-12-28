import React from "react";
import PropTypes from 'prop-types'
import MoviesDisplay from "../components/MoviesDisplay";
import MovieCard from "../components/MovieCard";
import { fetchAPI } from "../utils/fetchAPI";
import { useParams } from 'react-router-dom';

const withRouter = WrappedComponent => props => {
    const params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

class FolderPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            id: null,
            title: null,
            description: null,
            movies: [],
            movies_id: []
        }

        this.fetchFolderMovies = this.fetchFolderMovies.bind(this)
        this.fetchMovies = this.fetchMovies.bind(this)
    }

    async fetchFolderMovies(){
        let folder_id = this.props.params.folder_id
        await fetchAPI(`folders/${folder_id}/`, {method:"GET"})
            .then(response => response.json())
            .then(data => { this.setState(data)})
    }

    async fetchMovies(){
        let movies_id = this.state.movies_id
        movies_id.forEach(async (movie_id) => {
            await fetchAPI(`movies/${movie_id}/`, { method: "GET" })
                .then(response => response.json())
                .then(movie => { this.setState({movies: [...this.state.movies, movie] })})
        })
    }

    async componentDidMount(){
        await this.fetchFolderMovies()
        await this.fetchMovies()
    }

    render(){
        let { title, description, movies } = this.state
        return(
            <>
            {
            movies?
            <div className="container-fluid text-light">
                            <h2 className="fs-2">Folder: {title}</h2>
                            <MoviesDisplay movies={movies}/>
            </div>
            :
            <h5 className="text-light">Nothings here</h5>
            }
            </>
        )
    }
}

export default withRouter(FolderPage);