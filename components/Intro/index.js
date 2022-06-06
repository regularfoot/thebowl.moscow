import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Text from '../Text';

import logo from './hero-logo.svg';
import styles from './style.css';

const Intro = () => styled(styles)(
    <Section>
        <intro>
            <left>
                <img alt='логотип мероприятия' src={logo} />
            </left>
            <right>
                <p><Text color="accent">12</Text> ИЮНЯ<br />СКЕЙТПАРК <Text color="accent">САДОВНИКИ</Text> <br/> в парке им. Ю.М. Лужкова</p>
                <p>СКЕЙТ&BMX <Text color="accent">МАРКЕТ</Text><br />LIVE <Text color="accent">MUSIC</Text></p>
                <p>
                    {/*СТАРТ В <Text color="accent">14:00</Text><br />*/}
                    ВХОД <Text color="accent">БЕСПЛАТНЫЙ</Text></p>
            </right>
        </intro>
    </Section>
);

export default Intro;
