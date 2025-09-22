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
            page: 2, 
            peliculasFiltradas: [],
            textoInput: "" 
        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?api_key=${ApiKey}`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({peliculas: data.results, loading: false}) 
        })


    }

    cargarMas(){ 
        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.tipo}?page=${this.state.page}&api_key=${ApiKey}`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({peliculas: this.state.peliculas.concat(data.results), page: this.state.page + 1}) 
        })


    }
    filtro(e){
        let peliculasFiltradas = this.state.peliculas.filter(unaPeli => unaPeli.title.toLowerCase().includes(e.target.value.toLowerCase())) 
        this.setState({peliculasFiltradas: peliculasFiltradas, textoInput:e.target.value})  
    }
    render(){
        let peliculasAMostrar = this.state.textoInput == "" ? this.state.peliculas : this.state.peliculasFiltradas 
        return(
            <React.Fragment> 
                
                <Header />
                
                <h2 className="alert alert-primary"> ver todas las peliculas: {this.props.match.params.tipo == "popular" ? "populares" : "top rated movies"}</h2>
                <input type="text" placeholder="Buscar..." onChange = {(e) => this.filtro(e)}/>
                {this.state.loading ? <p>Cargando... </p> : <ListaCards data = {peliculasAMostrar}/> }

                <button onClick = {() => this.cargarMas()} > Cargar mas </button> 

               


                
                <Footer />
               
            </React.Fragment>

        )

    }
}


export default VerMas