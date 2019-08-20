import {YMaps, Map, Placemark} from 'react-yandex-maps';

const coords = [
    55.6665904,
    37.6579999,
];

const YandexMap = () => (
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
);

export default YandexMap;
