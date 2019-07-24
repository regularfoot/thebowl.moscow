import React from 'react';
import styled from 'reshadow';
import SVG from 'react-inlinesvg';

import instagram from '@fortawesome/fontawesome-free/svgs/brands/instagram.svg';
import vk from '@fortawesome/fontawesome-free/svgs/brands/vk.svg';

import styles from './style.css';

const Social = props => styled(styles)(
    <social as="ul" {...props}>
        <li>
            <a
                href="https://www.instagram.com/thebowlru/"
                target="_blank"
                aria-label="Инстаграм мероприятия the bowl"
            >
                <SVG src={instagram} />
            </a>
        </li>
        <li>
            <a
                href="https://vk.com/thebowl"
                target="_blank"
                aria-label="Группа вконтакте мероприятия the bowl"
            >
                <SVG src={vk} />
            </a>
        </li>
    </social>
);

export default Social;
