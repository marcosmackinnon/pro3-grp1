import { Component } from "react";
import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

class Card extends Component{
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    componentDidMount() {
        console.log(this.props) // muestro en la consola, el array con la info de cada pelicula, y luego en la linea 29 por ej, accedo a cada titulo de al pelicula, poniendo this.props.data.title. Asi con cada 

    }

    render(){
        return(

            <React.Fragment> 

                 <article className="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} class="card-img-top" alt="..." /> {/* para que se muestre la imagen de cada pelicula, this.props.data (entras al data del array, y ahi al poster_path pq se llama asi )  */}
                <div className="cardBody">
                    <h5 className="card-title"> {this.props.data.title}</h5>
                    <p className="card-text">{this.props.data.overview}</p>
                    
                    '<Link to={`/detalle/${this.props.data.id}`} className="btn btn-primary">Ver más</Link>
                </div>
            </article>

            </React.Fragment>
        )

    }
}




export default Card