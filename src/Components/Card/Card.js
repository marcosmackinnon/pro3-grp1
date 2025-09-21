import { Component } from "react";
import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

class Card extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            mostrarDescripcion: false // estado para mostrar / ocultar descripcion de la tarjeta


        }
    }


    componentDidMount() {
        console.log(this.props) // muestro en la consola, el array con la info de cada pelicula, y luego en la linea 29 por ej, accedo a cada titulo de al pelicula, poniendo this.props.data.title. Asi con cada 

    }

    manejarDescripcion(){ //funcion para que el onClick del boton, cambie el estado de mostrarDescripcion (en this.state) (min 34 primer video)
        if(this.state.mostrarDescripcion){
            this.setState({mostrarDescripcion: false}) //setState es la funcion que cambia el estado 
        }else{
            this.setState({mostrarDescripcion: true})

            }
        }
         // cada vez que se haga click en el boton, el estado de mostrarDescripcion, cambia a lo contrario de lo que era antes 
    

    render(){
        return(
            <React.Fragment> 

                 <article className="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} class="card-img-top" alt="..." /> {/* para que se muestre la imagen de cada pelicula, this.props.data (entras al data del array, y ahi al poster_path pq se llama asi )  */}
                
                <div className="cardBody">
                    <h5 className="card-title"> {this.props.data.title}</h5>
                    
                    <button onClick={() => this.manejarDescripcion()}> Ver descripicion </button> {/* para mostrar / ocultar descripcion de la tarjeta, para ello pongo un estado en el state */}
                    
                    {this.state.mostrarDescripcion ? <p className="card-text">{this.props.data.overview}</p> : " " } {/* hago este "if" para que muestre la descripcion cuando el botton (en el state), esta en true, this.props.data.overview, es para que se muestre la descripcion de cada pelicula, pq en el array de la apie, la descripcion esta en overview */} 
                    
                    <Link to={`/detalle/${this.props.data.id}`} className="btn btn-primary">Ir a detalle</Link>
                </div>

            </article>

            </React.Fragment>
        );

    }
}

export default Card;