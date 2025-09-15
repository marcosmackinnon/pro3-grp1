import React from 'react';
import { Component } from "react";
import "./Formulario.css"
import { withRouter } from 'react-router-dom'

class Formulario extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            searchData: ""
          };
        }
        
        evitarSubmit(event){
            event.preventDefault()
            this.props.history.push("/search-results/" + this.state.searchData)
        }

        controlarCambios(event) {
            this.setState({ searchData: event.target.value });
          }


        render(){
            return(

                <React.Fragment> 
                <div className="formulario">
                
                <form onSubmit={(event) => this.evitarSubmit(event)}>
                
                <input type="text" onChange={(event) => this.controlarCambios(event)} value={this.state.searchData}/>
                <button type="submit">
                Enviar
                </button>
                </form>

                </div>
                </React.Fragment>
            )

        }
    }

    export default withRouter(Formulario)
