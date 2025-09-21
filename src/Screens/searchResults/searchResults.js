import {Component} from 'react';
import React from 'react';
import Header from '../../Components/Header/Header';
import ListaCards from '../../Components/ListaCards/ListaCards';
import Footer from '../../Components/Footer/Footer';


class searchResults extends Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            loading: true,
            

        }
    }

    componentDidMount() {
        console.log(this.props)
        let busqueda = this.props.match.params.query
        console.log(busqueda)
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=0d344b0555f945a0cd6729220a53fe40&language=en-US&page=1&query=${busqueda}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({data: data.results, loading: false})})

    }

    render() {
       


        return(
            <React.Fragment>
                <Header />
                




               {this.state.loading ? <p>cargando...</p> : <ListaCards data = {this.state.data}/>}
               <Footer />
            </React.Fragment>
        )
    }

}

export default searchResults;