import React from 'react';
import { Component } from "react";
import "./Formulario.css"

class Formulario extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            resultados: []

        }
    }
    evitarSubmit(event){
        event.preventDefault()
    }

componentDidMount() {

    }

    render(){
        return(

            <React.Fragment> 
                <div className="formulario">
                     <form className="search-form" action="results.html" method="get">
                        <input 
                            type="text" 
                            className="" 
                            name="searchData" 
                            placeholder="Buscar..." 
            /> 
                         <button type="submit" className="btn btn-success btn-sm">Buscar</button>
                    </form>
                </div>
            </React.Fragment>
        )

    }
}

export default Formulario