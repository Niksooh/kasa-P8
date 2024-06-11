import React from 'react';
import background from '../assets/images/Image-source-2.jpg';
import Banner from '../components/Banner';
import Collapse from '../components/Collapse';
import collapseData from '../data/collapse.json';

const arrayCollapse = collapseData;

export default function About() {
    return (
        <>
            <Banner background={background} />
            <div>
                {arrayCollapse.map(collapse => (
                    <Collapse key={collapse.id} label={collapse.label} content={collapse.content} />
                ))}
            </div>
        </>
    );
}