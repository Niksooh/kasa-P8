import React from 'react';
import { NavLink } from "react-router-dom"


export default function Card(props) {
    const logement = props.logement
    return <div className='photos'>
        <figure className='cards'>
            <img src={logement.cover} alt={logement.title} />
            <figcaption>{logement.title}</figcaption>
            <NavLink to={`../pages/Housing${logement.id}`} />
        </figure>
    </div>
}