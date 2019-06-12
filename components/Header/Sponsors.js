import React from 'react';
import styled from 'reshadow';

import fedImg from '../../static/sponsors/rus-fed.svg';
import projectAgImg from '../../static/sponsors/project-ag.svg';
import sportsDepImg from '../../static/sponsors/sports-dep.svg';

const Sponsors = () => styled`
    sponsors {
        width: 100%;
        list-style: none;
        padding: 0;
        margin: 10px 0 0;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        & li {
            max-width: 30%;
            &[|ag] {
                max-width: 10%;
            }
            & img {
                width: 100%;
            }
        }
        & li + li {
            margin-left: 5px;
        }
    }

    @media only screen and (min-width: 600px) {
        sponsors {
            width: auto;
            justify-content: initial;
            & li + li {
                margin-left: 30px;
            }
        }
    }
`(
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
