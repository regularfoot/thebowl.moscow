import dimaImg from './static/skaters/dima.jpg?resize&sizes[]=200&sizes[]=250&sizes[]=300&sizes[]=350&sizes[]=450';
import davidImg from './static/skaters/david.jpg?resize&sizes[]=200&sizes[]=250&sizes[]=300&sizes[]=350&sizes[]=450';
import filnImg from './static/skaters/flin.jpg?resize&sizes[]=200&sizes[]=250&sizes[]=300&sizes[]=350&sizes[]=450';
import goshanImg from './static/skaters/goshan.jpg?resize&sizes[]=200&sizes[]=250&sizes[]=300&sizes[]=350&sizes[]=450';

export const schedule = [
    {
        time: '12:30',
        label: 'Квалификация Скейт',
    },
    {
        time: '13:40',
        label: 'Лучший трюк Скейт',
    },
    {
        time: '15:00',
        label: 'Финал Скейт',
    },
    {
        time: '15:45',
        label: 'Квалификация BMX',
    },
    {
        time: '16:15',
        label: 'BMX Парк Финал',
    },
    {
        time: '16:50',
        label: 'BMX STREET CASH JAM',
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
        img: require('./static/bmxers/michael-korolev.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Илья Хвайницкий',
        img: require('./static/bmxers/ilya.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Сергей Тырнов',
        img: require('./static/bmxers/sergey-turnov.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Вениамин Ромашев',
        img: require('./static/bmxers/veniamin.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Андрей Гордеев',
        img: require('./static/bmxers/andrey.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Алексей Степанов',
        img: require('./static/bmxers/alexey.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Сергей Супонин',
        img: require('./static/bmxers/sergeey-suponin.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Никита Паустьян',
        img: require('./static/bmxers/nikita.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Макс Чуприна',
        img: require('./static/bmxers/max-chuprina.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
    {
        name: 'Рафаэль Сулейманов',
        img: require('./static/bmxers/raphael.jpg?resize&sizes[]=200.jpgsizes[]=250.jpgsizes[]=300.jpgsizes[]=350.jpgsizes[]=450'),
    },
];

export default {
    skaters,
    bmxers,
};
