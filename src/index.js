import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

reportWebVitals();

// import ReactDOM from "react-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// ReactDOM.render(<App/>, document.getElementById('root'));
// serviceWorker.unregister();