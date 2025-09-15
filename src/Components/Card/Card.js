import { Component } from "react";
import React from "react";
import "./Card.css"


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
                    <a href="/detalle/:id" class="btn btn-primary">Ver más</a>
                </div>
            </article>

            </React.Fragment>
        )

    }
}




export default Card