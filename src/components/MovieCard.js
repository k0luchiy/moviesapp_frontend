import React from 'react'
import PropTypes from 'prop-types';
import './MovieCard.css'
import MovieMenuButton from './MovieMenuButton';

export default class MovieCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        const { id, title, rating, poster, year, length, description } = this.props

        return(
            <>
            <div className='col'>
            <div className='card text-bg-dark m-2'>
                {rating ? 
                <span className='badge translate-middle text-wrap py-1 bg-success'>
                    {rating} <span className='visually-hidden'>Movie rating</span>
                </span>
                :''}
                        <img className='card-img-top img-fluid' src={poster}/>
                <div className='card-body d-flex justify-content-center align-items-center'>
                    <div className='card-title fs-5 pe-2'>{title}</div>
                    {year || length ? <span className='vr my-2' /> :''}
                    <div className='text-secondary px-2'>

                        <small>
                            {year ? <span>{year}, </span>:''}
                            {length ? <span>{length}min.</span> :''}
                        </small>
                    </div>
                    <div className="ms-auto">
                        <MovieMenuButton movie_id={id}/>
                    </div>
                </div>
            </div>
            </div>
            </>
        )
    }
}

MovieCard.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.string,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number,
    length: PropTypes.number,
    // description: PropTypes.string,
}

MovieCard.defaultProps = {
    title: null,
    rating: null,
    // poster: null,
    year: null,
    length: null,
    // description: null,
}