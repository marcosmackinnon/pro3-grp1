import { Component } from "react";
import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import Formulario from "../Formulario/Formulario";

class Header extends Component{
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }
    componentDidMount() {

    }

    render(){
        return(

            <React.Fragment> 
            <h1>UdeSA Movies</h1>

            <nav>
                <ul className="nav nav-tabs my-4">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/movies">Películas</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/series">Series</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">Favoritas</Link>
                    </li>
                </ul>

            <Formulario />
            </nav>
            

            </React.Fragment>
        )

    }
}




export default Header