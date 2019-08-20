import React from 'react';
import styled from 'reshadow';
import styles from './style.css';

const Guest = ({img, shade = 'dark', name, ...props}) => styled(styles)(
    <guest as="figure" use:shade={shade} {...props}>
        <img src={img.src} srcSet={img.srcSet} alt={name} />
        <name as="figcaption">{name}</name>
    </guest>
);

export default Guest;
