import React from 'react';
import styled from 'reshadow';

import fedImg from '../../../static/sponsors/rus-fed.svg';
import projectAgImg from '../../../static/sponsors/project-ag.svg';
import sportsDepImg from '../../../static/sponsors/sports-dep.svg';

import styles from './style.css';

const Sponsors = () => styled(styles)(
    <sponsors as="ul">
        <li>
            <img src={fedImg} alt="Логотип российской федерации скейтбординга" />
        </li>
        <li use:ag>
            <img src={projectAgImg} alt="Логотип project ag" />
        </li>
        <li>
            <img src={sportsDepImg} alt="Логотип департамента спорта и туризма Москвы" />
        </li>
    </sponsors>
);

export default Sponsors;
