import React from 'react';
import styled from 'reshadow';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

import styles from './style.css';

const coords = [
    55.6665904,
    37.6579999,
];

const MyMap = () => {
    const [shouldRender, onRenderChange] = React.useState(false);
    React.useEffect(() => {
        if (window.scrollY > 0) {
            onRenderChange(true);
            return;
        }
        window.addEventListener('scroll', () => onRenderChange(true), {once: true});
    });
    return styled(styles)(
        <wrapper>
            {
                shouldRender
                    ? (
                        <YMaps>
                            <div>
                                <Map
                                    defaultState={{center: coords, zoom: 16}}
                                    width=""
                                    height="300px"
                                >
                                    <Placemark defaultGeometry={coords} />
                                </Map>
                            </div>
                        </YMaps>
                    ) : null
            }
        </wrapper>
    );
};

export default MyMap;
