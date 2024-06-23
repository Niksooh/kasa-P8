import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Stars from '../components/Stars';
import '../styles/housingStyle.css';

export default function Housing({ data }) {
    const { id } = useParams();
    const dataMap = new Map(data.map(currentData => [currentData.id, currentData]));
    const housing = dataMap.get(id);


    if (!housing) {
        return <Navigate to='/error' />;
    }

    return (
        <>
            <Carousel pictures={housing.pictures} title={housing.title} />

            <section className='information_housing'>
                <article className='title_housing'>
                    <h2>{housing.title}</h2>
                    <p>{housing.location}</p>

                    <div className='tags_housing'>
                        {housing.tags.map((value, index) => (
                            <span key={index} className="tag">{value}</span>
                        ))}
                    </div>
                </article>

                <article className='host_housing'>
                    <figure className='information_host'>
                        <img src={housing.host.picture} alt={`Photo de profil de ${housing.host.name}`} />
                        <figcaption className='name_host'>{housing.host.name}</figcaption>
                    </figure>

                    <Stars rating={housing.rating} />
                </article>
            </section>

            <section className="housing_collapse">
                <Collapse key={"Description"} id={"Description"} label={"Description"} content={housing.description} />
                <Collapse key={"Equipements"} id={"Equipements"} label={"Equipements"} contentList={housing.equipments} />
            </section>
        </>
    );
}
