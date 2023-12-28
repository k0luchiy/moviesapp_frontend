import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignInPage from "./pages/SignInPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import FolderPage from "./pages/FolderPage";


class App extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return (
            <>
            <Router>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route element={<HomePage/>} path="/" exact/>
                        <Route element={<ProfilePage/>} path="/profile" exact/>
                        <Route element={<FolderPage />} path="/folders/:folder_id" exact/>
                        <Route element={<LoginPage/>} path="/login"/>
                        <Route element={<SignInPage />} path="/signin"/>
                    </Routes>
                </AuthProvider>
            </Router>
            </>
        );
    }
}

export default App;
