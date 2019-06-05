import React from 'react';
import styled from 'reshadow';

import Sponsors from './Sponsors';
import Social from './Social';

const Header = () => styled`
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-flow: column nowrap;

    }
    Social {
        margin-top: 10px;
    }

    @media only screen and (min-width: 600px) {
        header {
            flex-flow: row nowrap;
            margin: 10px 20px;
        }
        Social {
            margin-top: 0;
        }
    }
`(
    <header>
        <Sponsors />
        <Social />
    </header>
);

export default Header;
