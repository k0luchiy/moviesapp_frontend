import React from "react";
import PropTypes from "prop-types"
import MovieCard from '../components/MovieCard'

export default class MoviesDisplay extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        let {movies} = this.props
        
        return(
            <>
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {movies.map(function (movie, index) {
                        return (
                            <MovieCard id={movie.id} title={movie.title} rating={movie.rating}
                                year={movie.year} length={movie.length}
                                poster={movie.poster} key={index} />
                        )
                    })}
                </div>
            </>
        )
    }
}

MoviesDisplay.propTypes = {
    movies: PropTypes.array.isRequired,
}

MoviesDisplay.defaultProps = {
    // movies: [],
}
