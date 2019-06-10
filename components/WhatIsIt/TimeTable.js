import React from 'react';
import styled from 'reshadow';

import {schedule, marketTimting} from '../../data.js';
import Text from '../Text';

const TimeTable = props => styled`
    h2 {
        font-size: 35px;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;

        & li {
            display: flex;
            font-size: 18px;
            line-height: 24px;

            & timeslot {
                margin-right: 20px;
            }
        }
    }

    p {
        font-size: 28px;
        line-height: 36px;
    }

`(
    <wrapper {...props}>
        <h2>РАСПИСАНИЕ</h2>
        <ul>
            <li>
                <timeslot><Text color="accent">{marketTimting.time}</Text></timeslot>
                <timename>{marketTimting.label}</timename>
            </li>
            {
                schedule.map(
                    ({time,label}) => (
                        <li key={time}>
                            <timeslot><Text color="accent">{time}</Text></timeslot>
                            <timename>{label}</timename>
                        </li>
                    )
                )
            }
        </ul>

        <p><Text color="accent">15</Text> ИЮНЯ<br />ПАРК <Text color="accent">САДОВНИКИ</Text></p>
        <p>СТАРТ В <Text color="accent">14:00</Text><br />ВХОД <Text color="accent">БЕСПЛАТНЫЙ</Text></p>

    </wrapper>
);

export default TimeTable;
