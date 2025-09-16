import { Component } from "react";
import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";

class Card extends Component{
    constructor(props) {
        super(props)
        
        this.state = {

        }
    }


    componentDidMount() {
        console.log(this.props)

    }

    render(){
        return(

            <React.Fragment> 

                 <article class="single-card">
                <img src={`https://image.tmdb.org/t/p/w500/${this.props.data.poster_path}`} class="card-img-top" alt="..." />
                <div class="cardBody">
                    <h5 class="card-title"> {this.props.data.title}</h5>
                    <p class="card-text">{this.props.data.overview}</p>
                    
                    '<Link to={`/detalle/${this.props.data.id}`} class="btn btn-primary">Ver más</Link>
                </div>
            </article>

            </React.Fragment>
        )

    }
}




export default Card