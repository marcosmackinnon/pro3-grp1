import React from "react";
import { Component } from "react";
import Header from "../../Components/Header/Header";
import ListaCards from "../../Components/ListaCards/ListaCards";


let ApiKey = "0d344b0555f945a0cd6729220a53fe40"

class Home extends Component{
    constructor(props) {
        super(props)
        
        this.state = {
            pelispopulares: [ ],

            pelistop: []

        }
    }
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({pelispopulares: data.results})
        })

        fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${ApiKey}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            this.setState({pelistop: data.results})
        })


    }

    render(){
        return(
            <React.Fragment>
                
                <Header />
                
                <h2 class="alert alert-primary"> Popular movies this week</h2>

                <ListaCards data = {this.state.pelispopulares.splice(0, 5)}/>


                <h2 class="alert alert-primary"> TOP rated movies this week</h2>

                <ListaCards data = {this.state.pelistop.splice(0, 5)}/>


                
               
               
            </React.Fragment>

        )

    }
}


export default Home