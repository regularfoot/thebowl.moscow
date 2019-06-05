import React from 'react';
import styled from 'reshadow';

import Section from '../Section';

import logo from './hero-logo.svg';

const Intro = () => styled`
    intro {
        display: flex;
        flex-flow: nowrap row;
    }
    left {
        width: 66%;
    }
    img {
        max-width: 100%;
    }
`(
    <Section>
        <intro>
            <left>
                <img img='логотип мероприятия' src={logo} />
            </left>
            <right>
                <p>2 ИЮНЯ<br />ПАРК САДОВНИКИ</p>
                <p>СКЕЙТМАРКЕТ<br />LIVE MUSIC</p>
                <p>СТАРТ В 14:00<br />ВХОД БЕСПЛАТНЫЙ</p>
            </right>
        </intro>
    </Section>
);

export default Intro;
