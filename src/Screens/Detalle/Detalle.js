import React, { Component } from "react";
import Card from "../../Components/Card/Card";

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

        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({data: data, loading: false})}) // cuando se termino de buscar el fetch (osea ya tengo los datos), pongo loading en false.
    }

    render() {
        return (
            this.state.loading ? <h1>Cargando...</h1> : <Card data={this.state.data}/> // min 25 primer video, significa que si loading es true, muestra "cargando", y si es false, muestra el card con la data que traje del fetch
        )
    }   
        

}

export default Detalle;