import React, { Component } from "react";

import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

let ApiKey = "0d344b0555f945a0cd6729220a53fe40"


class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true, 
            textoFavoritos: "agregar a favoritos" 
        }
    }

    componentDidMount() {
        console.log(this.props)
        let favoritos = localStorage.getItem("favoritos") 
        if(favoritos == null){ 
            favoritos = []
        }else{ 
            favoritos = JSON.parse(favoritos)
        }
        if(favoritos.includes(this.props.match.params.id)){ 
            
            this.setState({textoFavoritos: "sacar de favoritos"}) 
        }else{
            
            this.setState({textoFavoritos: "agregar a favoritos"})
        }
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${ApiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({data: data, loading: false})}) 
    }
    manejarFavoritos(){
        let favoritos = localStorage.getItem("favoritos") 
        if(favoritos == null){
            favoritos = []
        }else{ 
            favoritos = JSON.parse(favoritos)
        }
        if(favoritos.includes(this.props.match.params.id)){ 
            favoritos = favoritos.filter(unId => unId != this.props.match.params.id) 
            this.setState({textoFavoritos: "agregar a favoritos"}) 
        }else{
            favoritos.push(this.props.match.params.id) 
            this.setState({textoFavoritos: "sacar de favoritos"}) 
        }
        console.log(favoritos)
        favoritos = JSON.stringify(favoritos) 
        localStorage.setItem("favoritos", favoritos) 
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
                <button onClick={()=> this.manejarFavoritos()}>{this.state.textoFavoritos}</button>
            </section>
        </section>



                < Footer />




            </React.Fragment> 
        )
    }   
        

}

export default Detalle;