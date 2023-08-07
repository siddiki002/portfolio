import React from "react";

export default function Card(props){
    return (
        <>
            <div className="card">
                <div className="card--image">
                    <img src = {props.cardImage} alt = ""/>
                    <div className="card--name">{props.cardName}</div>
                </div>
                <div className="card--description">
                    <p>{props.cardDescription}</p>
                </div>
                <div className="card--link">
                    <a href={props.cardLink} target="new">Go to project <i class="bi bi-arrow-up-right-circle"></i></a>
                </div>
            </div>
        </>
    )
}