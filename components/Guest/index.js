import React from 'react';
import styled from 'reshadow';
import styles from './style.css';

const Guest = ({src, shade = 'dark', name, ...props}) => styled(styles)(
    <guest as="figure" use:shade={shade} {...props}>
        <img src={src} alt={name} />
        <name as="figcaption">{name}</name>
    </guest>
);

export default Guest;
