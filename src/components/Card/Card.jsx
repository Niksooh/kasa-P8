import React from 'react';

export default function Card(props) {
    const logement = props.logement
    return <div className='photos'>
        {logement.title}
        <img src={logement.cover} alt={logement.title}/>
        {logement.description}
        {logement.location}
    </div>
}