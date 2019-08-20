import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Guest from '../Guest';
import Text from '../Text';

import styles from './style.css';

const Title = ({title}) => (
    <span>
        ПРИГЛАШЕННЫЕ <Text color="accent">{title}</Text> РАЙДЕРЫ
    </span>
);

const Guests = ({guests, title}) => styled(styles)(
    <Section shade="dark" title={<Title title={title} />}>
        <guests>
        {
            guests.map(({name, img}) => (
                <Guest
                    key={name}
                    name={name}
                    img={img}
                    shade="accent"
                />
            ))
        }
        </guests>
    </Section>
);

export default Guests;
