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
                <section class="row cards" id="movies">  {/* (pongo estas llaves para poder hacer comentario )  */}          
               
              {this.props.data.map(unapelicula => <Card data = {unapelicula} /> )}   {/* lo que hice fue, pasar data desde el home, y luego con el map, por cada elemento del array lo que hago es renderizar una tarjetita   */}  {/* pero hasta aca lo que pasa es que te aparecen todas las peliulas iguales  */}
               {/* para mandar a cada tarjetita la informacion de su pelicula, unapelicula => <Card data = {unapelicula} / donde unapelicula va a ser cada elemento de el array   */}
               
               
               
               </section>
          

            </React.Fragment>
        )

    }
}




export default ListaCards







