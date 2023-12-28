import React from "react";
import PropTypes from "prop-types"
import { AuthContext } from "../context/AuthContext";
import { fetchAPI } from "../utils/fetchAPI";


export default class MovieMenuButton extends React.Component{
    static contextType = AuthContext

    constructor(props){
        super(props)
        this.fetchAddToFolder = this.fetchAddToFolder.bind(this)
    }

    async fetchAddToFolder(folder_id){
        let {movie_id} = this.props
        // let folder_movies = []
        await fetchAPI(`folders/${folder_id}/`, { method: "GET" })
            .then(response => response.json())
            .then(data => fetchAPI(`folders/${folder_id}/`,
                 { method: "PATCH", body: JSON.stringify({ movies_id: [...data.movies_id,movie_id] })}
                )
            )
    }

    render(){
        let {isLoggedIn} = this.context
        //let folders = null
        let {folders} =  isLoggedIn ? this.context.profile : this.context
        return(
            <>
            <div className="dropdown">
                <button type="button" className='btn btn-outline text-light rounded-circle'
                       data-bs-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                </button> 
                <ul className="dropdown-menu dropdown-menu-dark">   
                    <li><buttton className="dropdown-item">Like</buttton></li>    
                    <li><buttton className="dropdown-item">Watched</buttton></li>    
                    { folders ? folders.map((folder,index)=>{
                        return(
                            <li key={index}>
                                <buttton className="dropdown-item" onClick={async (e) => this.fetchAddToFolder(folder.id) }>
                                    {folder.title}
                                </buttton>
                            </li>
                        )
                     }) : <></> } 
                </ul>
            </div>
                
            </>
        )
    }
}

MovieMenuButton.propTypes = {
    movie_id: PropTypes.number.isRequired,
}

// MovieMenuButton.defaultProps = {
//     folders_id: [],
// }

