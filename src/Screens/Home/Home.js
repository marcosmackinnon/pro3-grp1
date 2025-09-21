import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ListaCards from "../../Components/ListaCards/ListaCards";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


let ApiKey = "0d344b0555f945a0cd6729220a53fe40"

class Home extends Component{
    constructor(props) {
        super(props)
        
        this.state = { 
            pelispopulares: [ ], //estos estados los hago para guardar las peliculas que me traigo de la apie 

            pelistop: [],

             

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


    render(){
        return(
            <React.Fragment> {/* el <React.Fragment> te permite devolver mas de un elemento en el return, react tiene ese problema que sino no te deja */}
                
                <Header />
                
                <h2 className="alert alert-primary"> Popular movies this week</h2>
                
                <Link to= "/vermas/popular"> <button className="btn btn-primary mb-3"> Ver mas </button> </Link> 
                 
                <ListaCards data = {this.state.pelispopulares.splice(0, 5)}/> {/* esto de .splice(0, 5) lo hago para que no se muestren las 20 peliculas, y se vean solo 5  */}


                <h2 className="alert alert-primary"> TOP rated movies this week</h2> {/* esto seria la "segunda seccion" que hay en el home  */}
                
                <Link to= "/vermas/top_rated"> <button className="btn btn-primary mb-3"> Ver mas </button> </Link>  

                <ListaCards data = {this.state.pelistop.splice(0, 5)}/> {/* uso pelistop que defini en el setState de la linea 35 en vez de pelispopulares  */}



                
                <Footer />
               
            </React.Fragment>

        )

    }
}


export default Home