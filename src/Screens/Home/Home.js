import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ListaCards from "../../Components/ListaCards/ListaCards";


let ApiKey = "0d344b0555f945a0cd6729220a53fe40"

class Home extends Component{
    constructor(props) {
        super(props)
        
        this.state = { 
            pelispopulares: [ ], //estos estados los hago para guardar las peliculas que me traigo de la apie 

            pelistop: [],

            page: 2 //min 39 primer video , y dsp en min 41 lo vuelve a tocar 

        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`) // hago un fetch a el endpoint "https://api.themoviedb.org/3/movie/popular" traido de la apie. para traer las peliculas mas populares
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({pelispopulares: data.results})
        })

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`) // min 1hr24 , hago otro fetch a el endpoint "https://api.themoviedb.org/3/movie/top_rated" traido de la apie. para traer las peliculas mejor calificadas 
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({pelistop: data.results}) // aca seteo el estado de pelistop, con data.results, que es donde estan las peliculas
        })


    }

    cargarMasPopular(){ //min 40 primer video / funcion para que ande el botton cargar mas peluculas populares
        fetch(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page}`) // hago un fetch a el endpoint "https://api.themoviedb.org/3/movie/popular" traido de la apie. para traer las peliculas mas populares
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({pelispopulares: this.state.pelispopulares.concat(data.results), page: this.state.page + 1}) // concat es para unir dos arrays, en este caso el array que ya tenia en el estado pelispopulares, con el array que me traje del fetch (data.results). Ademas, cada vez que se hace click en el boton, la pagina (page) aumenta en 1, para traer las siguientes 20 peliculas, osea la proxima vez que haga un cargar mas, ya la page sea 3 
        })


    }


    cargarMasTop(){
        fetch(`https://api.themoviedb.org/3/movie/top_rated?page=${this.state.page}`) 
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({pelistop: this.state.pelistop.concat(data.results), page: this.state.page + 1}) // concat es para unir dos arrays, en este caso el array que ya tenia en el estado pelispopulares, con el array que me traje del fetch (data.results). Ademas, cada vez que se hace click en el boton, la pagina (page) aumenta en 1, para traer las siguientes 20 peliculas, osea la proxima vez que haga un cargar mas, ya la page sea 3 
        })

    }

    render(){
        return(
            <React.Fragment> {/* el <React.Fragment> te permite devolver mas de un elemento en el return, react tiene ese problema que sino no te deja */}
                
                <Header />
                
                <h2 className="alert alert-primary"> Popular movies this week</h2>

                <ListaCards data = {this.state.pelispopulares.splice(0, 5)}/> {/* esto de .splice(0, 5) lo hago para que no se muestren las 20 peliculas, y se vean solo 5  */}

                <button onClick = {() => this.cargarMasPopular()} > Cargar mas </button> {/* min 40 primer video*/}

                <h2 className="alert alert-primary"> TOP rated movies this week</h2> {/* esto seria la "segunda seccion" que hay en el home  */}

                <ListaCards data = {this.state.pelistop.splice(0, 5)}/> {/* uso pelistop que defini en el setState de la linea 35 en vez de pelispopulares  */}

                <button onClick = { () => this.cargarMasTop()} > Cargar mas </button>


                
                <Footer />
               
            </React.Fragment>

        )

    }
}


export default Home