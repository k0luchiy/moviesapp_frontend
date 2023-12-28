import React from "react"

export default class Footer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <footer className="footer position-absolute bottom-0 w-100 bg-dark">
                <ul className="nav justify-content-center text-center p-2 m-2">
                    <li className="nav-item">
                        <a className="nav-link active px-2">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link px-2" href="#">Contact</a>
                    </li>
                </ul>
                <p className="text-center text-light">© 2023 Copyright: Koluchiy.com</p>
            </footer>
        
        )
    }
}