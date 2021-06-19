import React from 'react';
// import Hyt02 from  '../src/img/Hyt02.jpg';
import { NavLink } from 'react-router-dom';

const WebCard = (props) => {


    return (

        <>
                <div className="card">
                                <img src={props.img} className="card-img-top" alt={props.img} />
                                <div className="card-body">
                                <h5 className="card-title font-weight-bold">{props.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                        </div>
                </div>            

        </>
    )

};

export default WebCard;