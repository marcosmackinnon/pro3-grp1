import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ListaCards from "../../Components/ListaCards/ListaCards";


let ApiKey = "0d344b0555f945a0cd6729220a53fe40"

class VerMas extends Component{
    constructor(props) {
        super(props)
        
        this.state = { 
            peliculas: [],
            loading: true,
            page: 2 //min 39 primer video , y dsp en min 41 lo vuelve a tocar 

        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=${ApiKey}`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({peliculas: data.results, loading: false}) // cuando se termino de buscar el fetch (osea ya tengo los datos), pongo loading en false.
        })


    }

    cargarMas(){ 
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?page=${this.state.page}&api_key=${ApiKey}`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({peliculas: this.state.peliculas.concat(data.results), page: this.state.page + 1}) // concat es para unir dos arrays, en este caso el array que ya tenia en el estado pelispopulares, con el array que me traje del fetch (data.results). Ademas, cada vez que se hace click en el boton, la pagina (page) aumenta en 1, para traer las siguientes 20 peliculas, osea la proxima vez que haga un cargar mas, ya la page sea 3 
        })


    }

    render(){
        return(
            <React.Fragment> {/* el <React.Fragment> te permite devolver mas de un elemento en el return, react tiene ese problema que sino no te deja */}
                
                <Header />
                
                <h2 className="alert alert-primary"> ver todas las peliculas: {this.props.match.params.tipo == "popular" ? "populares" : "top rated movies"}</h2>

                {this.state.loading ? <p>Cargando... </p> : <ListaCards data = {this.state.peliculas}/> }

                <button onClick = {() => this.cargarMas()} > Cargar mas </button> {/* min 40 primer video*/}

               


                
                <Footer />
               
            </React.Fragment>

        )

    }
}


export default VerMas