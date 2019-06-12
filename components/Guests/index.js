import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Guest from '../Guest';
import Text from '../Text';

const Title = ({title}) => (
    <span>
        ПРИГЛАШЕННЫЕ <Text color="accent">{title}</Text> РАЙДЕРЫ
    </span>
);

const Guests = ({guests, title}) => styled`
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
    <Section shade="dark" title={<Title title={title} />}>
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
