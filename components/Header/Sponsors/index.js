import React from 'react';
import styled from 'reshadow';

import sportsDepImg from '../../../static/sponsors/sports-dep.svg';
import sportsGorillaImg from '../../../static/sponsors/Gorilla.svg';
import sportsKLImg from '../../../static/sponsors/Kuz-Lub.svg';
import sportsTNTImg from '../../../static/sponsors/tnt.png';
import sportsCityImg from '../../../static/sponsors/City.svg';
import sportsM24Img from '../../../static/sponsors/Logo_M24.svg';

import styles from './style.css';

const Sponsors = () => styled(styles)(
    <sponsors as="ul">
        <li>
            <img src={sportsDepImg} alt="Логотип департамента спорта и туризма Москвы" />
        </li>
        <li>
            <img src={sportsGorillaImg} alt="Логотип Gorilla" />
        </li>
        <li>
            <img src={sportsKLImg} alt="Логотип Кузьминки-Люблино" />
        </li>
        <li>
            <img src={sportsTNTImg} alt="Логотип ТНТ" />
        </li>
        <li>
            <img src={sportsCityImg} alt="Логотип The City" />
        </li>
        <li>
            <img src={sportsM24Img} alt="Логотип М24" />
        </li>
    </sponsors>
);

export default Sponsors;
