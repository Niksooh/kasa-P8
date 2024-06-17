import React from 'react';
import '../styles/housingStyle.css';
import { Navigate, useParams } from 'react-router-dom';

export default function Housing () {
    const {id} = useParams()
    const dataMap = new Map(data.map(currentData => [currentData.id, currentData]));
    const housing = dataMap.get(id);


 if(!housing) {
return
<Navigate to='/404'/>
}

return <>
<section className=''>

    <article className=''>
    <h3>{housing.title}</h3>
    <p>{housing.location}</p>

    <div className=''>
        {housing.tags.map((value) =>(
            <tags key={value} content={value} /> //Faire span ou faire composant
        ))}
    </div>
    </article>

    <article className=''>
        <figure className=''>
            <img src={housing.host.picture} alt={`Photo de profil de ${housing.host.name}`}/>
            <figcaption className=''></figcaption>
        </figure>


    </article>

</section>
</>
}