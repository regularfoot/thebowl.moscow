import React from 'react';
import styled from 'reshadow';

import Section from '../Section';

import logo from './hero-logo.svg';

const Intro = () => styled`
    img {
        max-width: 100%;
    }
`(
    <Section>
        <header>some header things</header>
        <intro>
            <img src={logo} />
        </intro>
    </Section>
);

export default Intro;
