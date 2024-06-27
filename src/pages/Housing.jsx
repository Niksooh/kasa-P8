import React from 'react';
import '../styles/housingStyle.css';
import { Navigate, useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Stars from '../components/Stars';

export default function Housing({ data }) {
    const { id } = useParams();
    console.log("Received data: ", data);
    const dataMap = new Map(data.map(currentData => [currentData.id, currentData]));
    const housing = dataMap.get(id);

    if (!housing) {
        return <Navigate to='/404' />;
    }

    return (
        <div className='housing_container'>
            <Carousel pictures={housing.pictures} title={housing.title} />
            <section className='information_housing'>
                <article className='title_housing'>
                    <h2>{housing.title}</h2>
                    <p>{housing.location}</p>
                    <div className='tags_housing'>
                        {housing.tags.map((value) => (
                            <span key={value} className="tag">{value}</span>
                        ))}
                    </div>
                </article>

                <article className='host_housing'>
                    <figure className='information_host'>
                        <img src={housing.host.picture} alt={`Profil de ${housing.host.name}`} />
                        <figcaption className='name_host'>{housing.host.name}</figcaption>
                    </figure>
                    <Stars rating={housing.rating} />
                </article>
            </section>
            <section className="housing_collapse">
                <Collapse key="Description" id="Description" label="Description" content={housing.description} />
                <Collapse key="Equipements" id="Equipements" label="Equipements" content={(
                    <ul>
                        {housing.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                )} />
            </section>
        </div>
    );
}
