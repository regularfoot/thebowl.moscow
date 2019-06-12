import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Text from '../Text';

import logo from './hero-logo.svg';

const Intro = () => styled`
    intro {
        display: flex;
        flex-flow: nowrap column;
    }
    left {
        width: 100%;
    }
    right {
        margin-left: 0;
        padding-top: 14px;
        font-size: 26px;
        line-height: 32px;
    }
    p {
        margin: 0;
        & + p {
            margin-top: 18px;
        }
    }
    img {
        max-width: 100%;
    }
    @media only screen and (min-width: 400px) {
        right {
            margin-left: 0;
            padding-top: 14px;
            font-size: 33px;
            line-height: 40px;
        }
    }
    @media only screen and (min-width: 500px) {
        right {
            font-size: 42px;
            line-height: 48px;
        }
    }
    @media only screen and (min-width: 600px) {
        intro {
            flex-flow: nowrap row;
            width: 500px;
            margin: auto;
        }
        left {
            width: 300px;
        }
        right {
            margin-left: 8px;
            padding-top: 33px;
            font-size: 16px;
            line-height: 20px;
            margin-right: auto;
        }
        p + p {
            margin-top: 5px;
        }
    }
    @media only screen and (min-width: 800px) {
        intro {
            width: 700px;
            margin: auto;
        }
        left {
            width: 350px;
            margin-left: auto;
        }
        right {
            margin-left: 12px;
            padding-top: 39px;
            font-size: 20px;
            line-height: 20px;
            margin-right: auto;
        }
        p + p {
            margin-top: 15px;
        }
    }
    @media only screen and (min-width: 1000px) {
        intro {
            width: 100%;
        }
        left {
            width: 60%;
        }
        right {
            margin-left: 18px;
            padding-top: 59px;
            font-size: 31px;
            line-height: 34px;
        }
    }
`(
    <Section>
        <intro>
            <left>
                <img alt='логотип мероприятия' src={logo} />
            </left>
            <right>
                <p><Text color="accent">15</Text> ИЮНЯ<br />ПАРК <Text color="accent">САДОВНИКИ</Text></p>
                <p>СКЕЙТ&BMX <Text color="accent">МАРКЕТ</Text><br />LIVE <Text color="accent">MUSIC</Text></p>
                <p>СТАРТ В <Text color="accent">14:00</Text><br />ВХОД <Text color="accent">БЕСПЛАТНЫЙ</Text></p>
            </right>
        </intro>
    </Section>
);

export default Intro;
