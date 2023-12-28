import React, { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default class Login extends React.Component{

    static contextType = AuthContext

    constructor(props){
        super(props)

    }



    render(){
        let {login} = this.context

        return (
        <>
            <div className="container-fluid mt-5 col-3">
                <div className="card">
                    <div className="card-header">
                        <h5 className="card-title">Login</h5>
                    </div>
                    <div className="card-body">
                            <form onSubmit={(e) => { e.preventDefault();login(e.target.username.value, e.target.password.value )}}>
                            <div className="mb-3">
                                <label for="usernameInput" className="form-label">Username</label>
                                <input className="form-control" id="usernameInput" name="username" type="text" placeholder="Username"></input>
                            </div>
                            <div className="mb-3">
                                <label for="passwordInput" className="form-label">Password</label>
                                <input className="form-control" id="passwordInput" name="password" type="password" placeholder="Password"></input>
                            </div>
                            <div className="text-end">
                                <button type="submit" className="btn btn-success">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>)
    }
}