import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"
import { fetchAPI } from "../utils/fetchAPI"

export default class Login extends React.Component {

    static contextType = AuthContext

    constructor(props) {
        super(props)
        this.fetchUserCreation = this.fetchUserCreation.bind(this)
    }

    async fetchUserCreation(e){
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        let { login } = this.context
        let response = await fetchAPI("users/",{
            method: "POST",
            body: JSON.stringify( { 'username': username, 'password': password } )
        })

        if(response.status === 201){
            login(username, password)
        }
    }

    render() {
        
        return (
            <>
                <div className="container-fluid mt-5 col-3">
                    <div className="card">
                        <div className="card-header">
                            <h5 className="card-title">Sign in</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.fetchUserCreation}>
                                <div className="mb-3">
                                    <label for="usernameInput" className="form-label">Username</label>
                                    <input className="form-control" onChange={this.handleUsernameChange} id="usernameInput" name="username" type="text" placeholder="Username"></input>
                                </div>
                                <div className="mb-3">
                                    <label for="passwordInput" className="form-label">Password</label>
                                    <input className="form-control" onChange={this.handlePasswordChange} id="passwordInput" name="password" type="password" placeholder="Password"></input>
                                </div>
                                <div className="text-end">
                                    <button type="submit" className="btn btn-success">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </>)
    }
}