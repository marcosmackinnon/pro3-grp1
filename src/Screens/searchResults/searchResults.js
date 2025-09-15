import {Component} from 'react';
import React from 'react';
import Card from '../../Components/Card/Card';
import Loader from '../../Components/Loader/Loader';


class searchResults extends Component{
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        console.log(this.props)
        let urlParams = new URLSearchParams(this.props.location.search)
        console.log(searchParams)
        let busqueda = urlParams.get('busqueda')
        console.log(busqueda)
        fetch(`https://api.themoviedb.org/3/movie/${busqueda}?api_key=0d344b0555f945a0cd6729220a53fe40&language=en-US&page=1`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({data: data, loading: false})})

    }

    render() {
        if (this.state.loading) return <Loader />;
        if (this.state.error) return <p>Tenemos un error, recarga la página</p>;


        return(
            <React.Fragment>
               {this.state.loading ? <p>cargando...</p> : this.state.data.map(unPersonaje => <Card data={unPersonaje} />)}
            </React.Fragment>
        )
    }

}

export default searchResults;