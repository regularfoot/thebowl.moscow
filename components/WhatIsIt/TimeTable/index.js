import React from 'react';
import styled from 'reshadow';

import {schedule, marketTimting} from '../../../data.js';
import Text from '../../Text';

import styles from './style.css';

const TimeTable = props => styled(styles)(
    <wrapper {...props}>
        {/*<h2>РАСПИСАНИЕ</h2>*/}
        {/*<ul>*/}
        {/*    <li>*/}
        {/*        <timeslot><Text color="accent">{marketTimting.time}</Text></timeslot>*/}
        {/*        <timename>{marketTimting.label}</timename>*/}
        {/*    </li>*/}
        {/*    {*/}
        {/*        schedule.map(*/}
        {/*            ({time,label}) => (*/}
        {/*                <li key={time}>*/}
        {/*                    <timeslot><Text color="accent">{time}</Text></timeslot>*/}
        {/*                    <timename>{label}</timename>*/}
        {/*                </li>*/}
        {/*            )*/}
        {/*        )*/}
        {/*    }*/}
        {/*</ul>*/}

        <p><Text color="accent">12</Text> ИЮНЯ<br />СКЕЙТПАРК <Text color="accent">САДОВНИКИ</Text><br/>в парке им. Ю.М. Лужкова</p>
        <p>
            {/*СТАРТ В <Text color="accent">13:40</Text><br />*/}
            ВХОД <Text color="accent">БЕСПЛАТНЫЙ</Text></p>

    </wrapper>
);

export default TimeTable;
