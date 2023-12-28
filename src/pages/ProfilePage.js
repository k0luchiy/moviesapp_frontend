import React from "react"
import { AuthContext } from "../context/AuthContext"
import { fetchAPI } from "../utils/fetchAPI"
import ProfileInfo from "../components/ProfileInfo"
import Folder from "../components/Folder"
import { Link } from "react-router-dom"

export default class ProfilePage extends React.Component{
    static contextType = AuthContext

    constructor(props){
        super(props)
        this.state = {
            description: null,
            folders: [],
            id: null,
            image: null,
            user: { id: null, username: null, email: null }
        }

        this.fetchProfile = this.fetchProfile.bind(this)
        this.handleFolderCreation = this.handleFolderCreation.bind(this)
    }

    async fetchProfile(){
        await fetchAPI("profiles/", {method: "GET"})
            .then(response=>response.json())
            .then(data => {this.setState(...data)})
    }

    async fetchFolderCreation(title){
        await fetchAPI("folders/",
         {method:"POST", body: JSON.stringify({title:title})}
        )
    }

    handleFolderCreation(e){
        this.fetchFolderCreation(e.target.folderTitle.value)
    }

    async componentDidMount(){
        await this.fetchProfile()
    }

    render(){
        let username = this.state.user.username
        let avatar = this.state.image
        let folders = this.state.folders

        return(
            <>
            <div className="container-fluid container-lg col-lg-8 col-xxl-6 bg-dark text-light min-vh-100">
                <ProfileInfo username={username} avatar={avatar}/>

                <div className="row my-5 justify-content-md-start justify-content-start">
                    <div className="d-flex">
                        <h4 className="">Folders:</h4>
                        <button type="button" className="ms-auto btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#folderCreationModal">+Add</button>
                    </div>
                    {folders.map(function(folder,index){
                        return(
                            <Folder title={folder.title} folder_id={folder.id} key={index} />
                        )
                    })}
                </div>
            </div>
            <div className="modal fade" id="folderCreationModal" tabIndex="-1" aria-labelledby="folderCreationLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <form onSubmit={this.handleFolderCreation}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title fs-5" id="folderCreationLabel">Create folder</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                
                                    <label className="form-label">Title:</label>
                                    <input className="form-control" type="text" placeholder="Title..." name="folderTitle"></input>
                                
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-secondary" type="button" data-bs-dismiss="modal">Cancel</button>
                                <button className="btn btn-success" type="submit">Create</button>
                            </div>
                        </div>
                        </form>
                    </div>
            </div>
            </>
        )
    }
}
