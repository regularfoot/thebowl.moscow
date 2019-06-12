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
    label: 'Skate & BMX Market',
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

export const bmxers = [
    {
        name: 'Михаил Королев',
        img: require('./static/bmxers/michael-korolev.jpg'),
    },
    {
        name: 'Илья Хвайницкий',
        img: require('./static/bmxers/ilya.jpg'),
    },
    {
        name: 'Сергей Тырнов',
        img: require('./static/bmxers/sergey-turnov.jpg'),
    },
    {
        name: 'Вениамин Ромашев',
        img: require('./static/bmxers/veniamin.jpg'),
    },
    {
        name: 'Андрей Гордеев',
        img: require('./static/bmxers/andrey.jpg'),
    },
    {
        name: 'Алексей Степанов',
        img: require('./static/bmxers/alexey.jpg'),
    },
    {
        name: 'Сергей Супонин',
        img: require('./static/bmxers/sergeey-suponin.jpg'),
    },
    {
        name: 'Никита Паустьян',
        img: require('./static/bmxers/nikita.jpg'),
    },
    {
        name: 'Макс Чуприна',
        img: require('./static/bmxers/max-chuprina.jpg'),
    },
    {
        name: 'Рафаэль Сулейманов',
        img: require('./static/bmxers/raphael.jpg'),
    },
];

export default {
    skaters,
    bmxers,
};
