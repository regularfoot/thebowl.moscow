import dimaImg from './static/skaters/dima.jpg';
import davidImg from './static/skaters/david.jpg';
import filnImg from './static/skaters/flin.jpg';
import goshanImg from './static/skaters/goshan.jpg';

export const schedule = [
    {
        time: '13:40',
        label: 'Лучший трюк Скейт',
    },
    {
        time: '14:40',
        label: 'Live Music',
    },
    {
        time: '15:00',
        label: 'Финал Скейт',
    },
    {
        time: '15:40',
        label: 'BMX Финал',
    },
    {
        time: '16:50',
        label: 'BMX Лучший трюк',
    },
    {
        time: '17:25',
        label: 'Награждения',
    },
];

export const marketTimting = {
    time: '12:00 - 18:00',
    label: 'Skate Market',
};

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
