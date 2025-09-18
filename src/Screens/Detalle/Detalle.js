import React, { Component } from "react";
import Card from "../../Components/Card/Card";

let ApiKey = "0d344b0555f945a0cd6729220a53fe40"


class Detalle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            loading: true,
        }
    }

    componentDidMount() {
        console.log(this.props)

        fetch(`https://api.themoviedb.org/3/movie/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({data: data, loading: false})})
    }

    render() {
        return (
            this.state.loading ? <h1>Cargando...</h1> : <Card data={this.state.data}/>
        )
    }   
        

}

export default Detalle;