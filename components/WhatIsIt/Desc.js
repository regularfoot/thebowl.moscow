import React from 'react';
import styled from 'reshadow';
import Text from '../Text';

const Desc = () => styled`
    h2 {
        font-size: 34px;
    }
    hashtag {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 28px;
        margin-top: 24px;
        display: block;
    }
`(
    <wrapper>
        <h2>ЧТО ТАКОЕ THE BOWL</h2>
        <desc>
            15 ИЮНЯ В МОСКВЕ ВНОВЬ ПРОЙДЕТ УНИКАЛЬНОЕ МЕРОПРИЯТИЕ - “THE BOWL 5”, В ЭТОМ ГОДУ МЫ ВНОВЬ ОБЪЕДИНИМ СИЛЬНЕЙШИХ ПРЕДСТАВИТЕЛЕЙ СКЕЙТБОРДИНГА И BMX В КРУПНЕЙШЕМ БЕТОННОМ БОУЛЕ СТОЛИЦЫ! ВАС ЖДЕТ СПОРТИВНО-МУЗЫКАЛЬНЫЙ ФЕСТИВАЛЬ ПОД ОТКРЫТЫМ НЕБОМ, ПОСВЯЩЕННЫЙ АКТИВНОМУ ОБРАЗУ ЖИЗНИ, МУЗЫКЕ И СОВРЕМЕННОЙ МОЛОДЕЖНОЙ КУЛЬТУРЕ. СОРЕВНОВАНИЯ ДЛЯ ВСЕХ ЖЕЛАЮЩИХ В БОУЛЕ И КОНТЕСТ В ФОРМАТЕ ШОУ ДЛЯ ПРИГЛАШЕННЫХ BMX-РАЙДЕРОВ, ГАРАНТИРУЕМ ВАМ НЕЗАБЫВАЕМОЕ ЗРЕЛИЩЕ! ВЕСЬ ДЕНЬ БУДЕТ РАБОТАТЬ СКЕЙТ-МАРКЕТ, ГДЕ ВЫСТАВЯТ СВОИ ТОВАРЫ ЛИДЕРЫ РЫНКА. В ЭТОМ ГОДУ, В РАМКАХ “THE BOWL 5”, ПРОЙДЕТ ВТОРОЙ ЧЕМПИОНАТ РОССИИ ПО СКЕЙТБОРДИНГУ, НЕ УПУСТИТЕ СВОЙ ШАНС ПОСМОТРЕТЬ НА БОРЬБУ ПЕРВЕНСТВО! ЖДЕМ ВАС В ПАРКЕ “САДОВНИКИ”
        </desc>
        <hashtag
            as="a"
            href="https://www.instagram.com/explore/tags/thebowlru/"
        >
            <Text color="accent">#</Text>thebowlru
        </hashtag>
</wrapper>


);

export default Desc;
