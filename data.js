import dimaImg from './static/skaters/dima.jpg';
import davidImg from './static/skaters/david.jpg';
import filnImg from './static/skaters/flin.jpg';
import goshanImg from './static/skaters/goshan.jpg';

export const schedule = [
    {
        time: '14:00',
        label: 'Live Music',
    },
    {
        time: '14:35',
        label: 'Полуфинал скейт',
    },
    {
        time: '15:20',
        label: 'Соревнования BMX',
    },
    {
        time: '15:45',
        label: 'Live Music',
    },
    {
        time: '16:25',
        label: 'Финал Скейт',
    },
    {
        time: '17:05',
        label: 'Лучший Трюк Скейт',
    },
    {
        time: '17:45',
        label: 'Церемония Награждения',
    },
];

export const skaters = [
    {
        name: 'Гоша Конышев',
        img: goshanImg,
    },
    {
        name: 'Дима Двойнишников',
        img: filnImg,
    },
    {
        name: 'Дима Бравичев',
        img: dimaImg,
    },
    {
        name: 'Давид Газиев',
        img: davidImg,
    },
];

export default {
    skaters,
};
