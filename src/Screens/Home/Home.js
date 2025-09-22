import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import ListaCards from "../../Components/ListaCards/ListaCards";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "../../Components/Loader/Loader";


let ApiKey = "0d344b0555f945a0cd6729220a53fe40"

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pelispopulares: [], 

            pelistop: [],
            loading: true, 



        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`) 
            .then(res => res.json())
            .then(data => {
                console.log(data)

                this.setState({ pelispopulares: data.results, loading: false })
            })

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`) 
            .then(res => res.json())
            .then(data => {
                console.log(data)

                this.setState({ pelistop: data.results, loading: false }) 
            })


    }


    render() {
        return (
            <React.Fragment> 

                <Header />

                {this.state.loading ? (<Loader />) : (

                    <>
                        <h2 className="alert alert-primary"> Popular movies this week</h2>

                        <Link to="/vermas/popular"> <button className="btn btn-primary mb-3"> Ver mas </button> </Link>

                        <ListaCards data={this.state.pelispopulares.splice(0, 5)} /> 


                        <h2 className="alert alert-primary"> TOP rated movies this week</h2> 

                        <Link to="/vermas/top_rated"> <button className="btn btn-primary mb-3"> Ver mas </button> </Link>

                        <ListaCards data={this.state.pelistop.splice(0, 5)} /> 



                    </>


                )} 


                <Footer />

            </React.Fragment>

        )

    }
}


export default Home