import React, { Component } from "react";
import './Loader.css'

class Loader extends Component {
    render() {
        return (
            <div className = "Loader-wrap">
                <div classname="spinner" />
                <p>Cargando...</p>
            </div>
        )
    }

}

export default Loader;