import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

let ApiKey = "0d344b0555f945a0cd6729220a53fe40"


class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true, //es una propiedad, porque sino se ejecuta primero el return del render y despues el fetch del componentDidMount entonces va a haber un momento donde este cuando estes haciendo el map en el render, va a estar vacio 
        }
    }

    componentDidMount() {
        console.log(this.props)

        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${ApiKey}`) // min 49 primer video 
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({data: data, loading: false})}) // cuando se termino de buscar el fetch (osea ya tengo los datos), pongo loading en false.
    }

    render() {
        return (
            this.state.loading ? <h1>Cargando...</h1> : 
            <React.Fragment> 
                < Header />

                <h2 class="alert alert-primary"> {this.state.data.title} </h2>
        <section class="row">
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.state.data.poster_path}`} alt=""/>
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="description">{this.state.data.overview}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.state.data.release_date}</p>
                <p class="mt-0 mb-0 length"><strong>Duración:</strong> {this.state.data.runtime}</p>
                <p class="mt-0" id="votes"><strong>Puntuación:</strong> {this.state.data.vote_average}</p>
            </section>
        </section>



                < Footer />




            </React.Fragment> // min 25 primer video, significa que si loading es true, muestra "cargando", y si es false, muestra el card con la data que traje del fetch
        )
    }   
        

}

export default Detalle;