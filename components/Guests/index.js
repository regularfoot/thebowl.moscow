import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Guest from '../Guest';

const Guests = ({guests}) => styled`
    Section {
        background-color: rgb(19, 20, 19);
        color: white;
    }
    h2 {
        text-align: center;
    }
    guests {
        display: flex;
        flex-flow: row wrap;
    }
    Guest {
        width: 33%;
    }
`(
    <Section shade="dark">
        <h2>ПРИГЛАШЕННЫЕ СКЕЙТ РАЙДЕРЫ</h2>
        <guests>
        {
            guests.map(({name}) => (
                <Guest key={name} name={name} src="https://placehold.it/400x400"/>
            ))
        }
        </guests>
    </Section>
);

export default Guests;
