import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Card from "../../Components/Card/Card";

let ApiKey = "0d344b0555f945a0cd6729220a53fe40"


class Favoritos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            favoritosPeliculas: [],


        }
    }

    componentDidMount() {
        let favoritos = localStorage.getItem("favoritos") //traigo lo que ya tenia en favoritos
        if (favoritos == null) { // si no habia nada en favoritos, creo un array vacio 
            favoritos = []
        } else { // si ya habia algo en favoritos, lo paso de string a array 
            favoritos = JSON.parse(favoritos)
        }
        favoritos.map(id => {
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`) // min 49 primer video 
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    let listaPelis = this.state.data
                    listaPelis.push(data)
                    this.setState({ data: listaPelis, })
                })
        })


    }

    quitarFavoritos(id) {
        let filtrados = this.state.data.filter(peli => peli.id !== id)
        this.setState({ data: filtrados })
    }








    render() {

        return (


            <React.Fragment>

                < Header />

                <h2 className="alert alert-primary"> peliculas Favoritos </h2>
                {this.state.data.length === 0 ? (
                    <p>No tenés películas favoritas aún.</p>
                ) : (
                    <div className="grid">
                        {this.state.data.map(peli => (
                            <Card
                                key={peli.id}
                                data={peli}  // le paso por props, la data de cada pelicula
                                quitarFavoritos={() => this.quitarFavoritos(peli.id)} // le paso por props, la funcion que va a ejecutar cuando haga click en el boton de "sacar de favoritos"
                            />
                        ))}
                    </div>
                )}


                < Footer />




            </React.Fragment> // min 25 primer video, significa que si loading es true, muestra "cargando", y si es false, muestra el card con la data que traje del fetch
        )
    }


}

export default Favoritos;