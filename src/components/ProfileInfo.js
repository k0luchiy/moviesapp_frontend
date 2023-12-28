import React from "react"
import PropTypes from "prop-types"

export default class ProfileInfo extends React.Component{
    constructor(props){
        super(props)
    }

    render(){

        let {username, avatar, email, description} = this.props

        return(
            <>
                <div className="row text-light">
                    <div className="col col-sm-3 col-12">
                        <img src={avatar} className="rounded-circle img-fluid"/>
                    </div>
                    <div className="col col-sm-9 mt-4">
                        <div className="row">
                            <div className="col">
                                <h2>{username}</h2>
                            </div>
                            <div className="col text-end">
                                <button className="btn btn-sm btn-outline-secondary">Change</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <small className="text-secondary">{email}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

ProfileInfo.propTypes = {
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    email: PropTypes.string,
    description: PropTypes.string,
}

ProfileInfo.defaultProps = {
    username: 'Unkown',
    email: '',
    description: '',
}