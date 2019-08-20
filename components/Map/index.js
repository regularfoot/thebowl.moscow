import React from 'react';
import styled from 'reshadow';
import dynamic from 'next/dynamic';

import styles from './style.css';

const YMap = dynamic({
    loader: () => import('./YandexMap'),
    ssr: false,
});

const MyMap = () => {
    const [shouldRender, onRenderChange] = React.useState(false);
    React.useEffect(() => {
        if (window.scrollY > 0) {
            onRenderChange(true);
            return;
        }
        window.addEventListener('scroll', () => onRenderChange(true), {
            once: true,
        });
    });
    return styled(styles)(
        <wrapper>
            {
                shouldRender ? <YMap /> : null
            }
        </wrapper>
    );
};

export default MyMap;
