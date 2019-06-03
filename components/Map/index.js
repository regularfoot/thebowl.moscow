import React from 'react';
import styled from 'reshadow';
import {YMaps, Map, Placemark} from 'react-yandex-maps';

const coords = [
    55.6665904,
    37.6579999,
];

const MyMap = () => styled`
    wrapper {
        width: 100%;
    }
`(
    <wrapper>
        <YMaps>
            <div>
                My awesome application with maps!
                <Map
                    defaultState={{center: coords, zoom: 16}}
                    width=""
                    height="300px"
                >
                    <Placemark defaultGeometry={coords} />
                </Map>
            </div>
        </YMaps>
    </wrapper>
);

export default MyMap;
