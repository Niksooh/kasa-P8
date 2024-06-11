import React from 'react';


export default function Card(props) {
    const logement = props.logement
    return <div className='photos'>
        <figure className='cards'>
        <img src={logement.cover} alt={logement.title}/>
        <figcaption>{logement.title}</figcaption>
        </figure>
    </div>
}