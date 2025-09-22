import { Component } from "react";
import React from "react";
import Card from "../Card/Card";
import "./ListaCards.css"

class ListaCards extends Component{
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
                <section class="row cards" id="movies">           
               
              {this.props.data.map(unapelicula => <Card data = {unapelicula} /> )}  
                
               
               
               
               </section>
          

            </React.Fragment>
        )

    }
}




export default ListaCards







