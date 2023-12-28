import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchAPI } from '../utils/fetchAPI'
import context from 'react-bootstrap/esm/AccordionContext'


export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    let fetchProfile = async () => {
        await fetchAPI("profiles/", { method: "GET" })
            .then(response => response.json())
            .then(data => setProfile(data[0]))
    }

    let [authTokens, setAuthTokens] = useState(()=> localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")):null )
    let [profile, setProfile] = useState(() => localStorage.getItem("authTokens") ? fetchProfile() : null)

    const navigate = useNavigate()

    
    let login = async (username, password)=>{
        // e.preventDefault()
        await fetchAPI("token/", {
            method: "POST",
            body: JSON.stringify({ 'username': username, 'password': password })
        })
        .then(response=>response.json())
        .then(data => {
            localStorage.setItem("authTokens", JSON.stringify(data))
            setAuthTokens(data)
            fetchProfile()
            navigate('/')
        })
    }

    
    let logout = async (e) => {
        setAuthTokens(null)
        //setProfile(null)
        //context.isLoggedIn = false
        //contextData.isLoggedIn = false
        localStorage.removeItem("authTokens")
        navigate("/")
    }

    let updateToken = async () => {
        await fetchAPI("token/redresh/", {
            method: "POST",
            body: JSON.stringify({ 'refresh': authTokens?.refresh })
        }).then(data => {
            localStorage.setItem("authTokens", JSON.stringify(data))
            setAuthTokens(data)
            navigate('/')
        })
    }

    let contextData = {
        authTokens: authTokens,
        profile: profile,
        isLoggedIn: authTokens ? true: false,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )

}