import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Desc from './Desc';
import TimeTable from './TimeTable';

const WhatIsIt = () => styled`
    Section {
        display: flex;
        flex-flow: column nowrap;
    }
    @media only screen and (min-width: 800px) {
        Section {
            flex-flow: row nowrap;

            & TimeTable {
                min-width: 300px;
                margin-left: 28px;
            }
        }
    }
`(
    <Section>
        <Desc />
        <TimeTable />
    </Section>
);

export default WhatIsIt;
