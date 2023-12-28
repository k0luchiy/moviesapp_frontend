import React from "react"
import { AuthContext } from "../context/AuthContext"
import { Link } from "react-router-dom"
import './Header.css'

export default class Header extends React.Component{
    
    static contextType = AuthContext

    constructor(props){
        super(props)
    }

    render(){
        let {isLoggedIn, logout} = this.context

        return (
            <>
                <div className="navbar navbar-dark navbar-expand-lg d-flex ">
                <div className="container">
                    {/* <a className="navbar-brand" href="#">Movies</a> */}
                    <Link to="/" className="navbar-brand">Movies</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-light" id="navbarContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            { isLoggedIn? 
                            <>
                            <li className="nav-item">
                                <Link to="/profile" className="nav-link">Profile</Link>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="#" aria-current="page" onClick={logout}>Logout</a>
                            </li> 
                            </>
                            :
                            <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li> 
                            <li className="nav-item">
                                <Link to="/signin" className="nav-link">Sign in</Link>
                            </li> 
                            </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
            </>
        )
    }
}