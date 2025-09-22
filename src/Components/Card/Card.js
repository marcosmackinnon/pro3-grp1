import { Component } from "react";
import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

class Card extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mostrarDescripcion: false, 
            textoFavoritos: "agregar a favoritos"


        }
    }


    componentDidMount() {
        console.log(this.props)
        let favoritos = localStorage.getItem("favoritos") 

        if (favoritos == null) { 
            favoritos = []
        } else { 
            favoritos = JSON.parse(favoritos)
        }

        if (favoritos.includes(this.props.data.id)) {

            this.setState({ textoFavoritos: "sacar de favoritos" }) 
        } else {

            this.setState({ textoFavoritos: "agregar a favoritos" }) 
        }

    }

    manejarFavoritos() {
        let favoritos = localStorage.getItem("favoritos") 
        if (favoritos == null) { 
            favoritos = []
        } else { 
            favoritos = JSON.parse(favoritos)
        }
        if (favoritos.includes(this.props.data.id)) {
            favoritos = favoritos.filter(unId => unId !== this.props.data.id) 
            if (this.props.quitarFavoritos) { 
                this.props.quitarFavoritos(this.props.data.id)
            }

            this.setState({ textoFavoritos: "agregar a favoritos" }) 
        } else {
            favoritos.push(this.props.data.id)  
            this.setState({ textoFavoritos: "sacar de favoritos" })  
        }
        console.log(favoritos)
        favoritos = JSON.stringify(favoritos)  
        localStorage.setItem("favoritos", favoritos) 
    }

    manejarDescripcion() { 
        if (this.state.mostrarDescripcion) {
            this.setState({ mostrarDescripcion: false })
        } else {
            this.setState({ mostrarDescripcion: true })

        }
    }
    


    render() {
        return (
            <React.Fragment>

                <article className="single-card">
                    <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} className="card-img-top" alt="..." /> 

                    <div className="cardBody">
                        <h5 className="card-title"> {this.props.data.title}</h5>

                        <button onClick={() => this.manejarDescripcion()}> Ver descripicion </button> 

                        {this.state.mostrarDescripcion ? <p className="card-text">{this.props.data.overview}</p> : " "} 

                        <Link to={`/detalle/${this.props.data.id}`} className="btn btn-primary">Ir a detalle</Link>
                        <button onClick={() => this.manejarFavoritos()}>{this.state.textoFavoritos}</button>


                    </div>

                </article>

            </React.Fragment>
        );

    }
}

export default Card;