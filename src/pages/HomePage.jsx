import React from 'react';
import Banner from '../components/Banner'
import background from '../assets/images/Image-source-1.jpg'
import data from '../data/logements.json'
import Card from '../components/Card';
import '../styles/homeStyle.css'



export default function HomePage() {

  const caption = "Chez vous, partout et ailleurs"

  return <>
    <Banner background={background} caption={caption} />
    <section className="container-home">
      {data.map(logement => {
        return <Card logement={logement}></Card>
      })}
    </section>
  </>
}
