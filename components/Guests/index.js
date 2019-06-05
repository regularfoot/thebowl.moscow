import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Guest from '../Guest';

const Guests = ({guests}) => styled`
    Section {
        background-color: rgb(19, 20, 19);
        color: white;
    }
    guests {
        display: flex;
        flex-flow: row wrap;
    }
    Guest {
        width: 50%;
    }
`(
    <Section shade="dark" title="ПРИГЛАШЕННЫЕ СКЕЙТ РАЙДЕРЫ">
        <guests>
        {
            guests.map(({name, img}) => (
                <Guest
                    key={name}
                    name={name}
                    src={img}
                    shade="accent"
                />
            ))
        }
        </guests>
    </Section>
);

export default Guests;
