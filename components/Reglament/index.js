import React from 'react';
import styled from 'reshadow';
import Modal from '../Modal';

import Section from '../Section';

const Reglament = () => {
    const [isModalOpen, setOpen] = React.useState(false);
    return styled`
        h3 {
            margin-top: 0;
        }
        openReglament {
            background-color: transparent;
            padding: 0;
            display: inline;
            color: inherit;
            font-size: inherit;
            line-height: inherit;
            font-weight: inherit;
            border: 0;
        }
    `(
        <Section title={
            <openReglament as="button" onClick={() => setOpen(true)}>Посмотреть Регламент</openReglament>
        }>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setOpen(false)}
                closeLabel="Закрыть регламент"
            >
                <h3>Регламент - BOWL JAM BMX.</h3>

                <p>Судейство соревнований в дисциплине BOWL обеспечивается 3 судьями. В боуле судьи выставляют оценки в протоколе в письменном виде по 10-бальной шкале. Из оценок за трюки формируется общее количество баллов. Официальные результаты утверждаются совместным решением судей на основе письменных протоколов.</p>

                <h4>Критерии судейства:</h4>

                <p>Исполнение и сложность дорожки и трюков, амплитуда, техничность.<br />Разнообразность трюков в дорожке. Креативность.</p>

                <p>Квалификация: 10 приглашенных участников. Делятся на две группы по 5 человек, 2 попытки по 45 секунд.</p>

                <p>Финал: 4 человека, 2 попытки по 45 секунд.</p>

                <h4>STREET CASH JAM на 3-х фигурах парка.</h4>
                <p>За лучшие трюки по мнению судей райдеры будут награждаться кэшем, джем без призовых мест, участвуют все желающие!</p>
            </Modal>
        </Section>
    );
};

export default Reglament;
