import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Desc from './Desc';
import TimeTable from './TimeTable';

import styles from './styles.css';

const WhatIsIt = () => styled(styles)(
    <Section>
        <Desc />
        <TimeTable />
    </Section>
);

export default WhatIsIt;
