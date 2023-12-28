import React from "react";
import {AuthContext} from "../context/AuthContext"

import { fetchAPI } from "../utils/fetchAPI";
import MoviesDisplay from "../components/MoviesDisplay";

export default class Home extends React.Component{
    static contextType = AuthContext
    constructor(props){
        super(props)
        this.state = {
            movies: []
        }

        this.fetchMovies = this.fetchMovies.bind(this)
    }

    async fetchMovies(){
        await fetchAPI("movies/", {method: "GET"})
            .then(response=>response.json())
            .then(data=> this.setState({movies:data}))
    }

    async componentDidMount(){
        await this.fetchMovies()
    }

    render(){
        let { isLoggedIn, profile } = this.context
        var movies = this.state.movies
        
        return (
        <>
            <div className="container-fluid py-3">
                <MoviesDisplay movies={this.state.movies}/>
            </div>
        </>)
    }
}