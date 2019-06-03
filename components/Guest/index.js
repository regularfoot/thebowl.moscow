import React from 'react';
import styled from 'reshadow';

const Guest = ({src, shade = 'dark', name, ...props}) => styled`
    guest {
        position: relative;
        &[|shade='dark'] name {
            background-color: rgba(19, 20, 19, .75);
        }
        &[|shade='accent'] name {
            background-color: rgba(118, 48, 119, .75);
        }
        &:hover name {
            opacity: 1;
        }
    }

    name {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        padding: 10px;
        align-items: center;
        text-align: center;
        justify-content: space-around;
        transition: color .3s, background-color .3s;
        transition: all .4s ease-in-out;
        opacity: 0;
    }

    img {
        max-width: 100%;
        display: block;
        margin: auto;
    }

`(
    <guest use:shade={shade} {...props}>
        <img src={src} alt={name} />
        <name as="span">{name}</name>
    </guest>
);

export default Guest;
