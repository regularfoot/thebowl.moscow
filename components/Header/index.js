import React from 'react';
import styled from 'reshadow';

import styles from './style.css';

import Sponsors from './Sponsors';
import Social from './Social';

const Header = () => styled(styles)(
    <header>
        <Sponsors />
        <Social />
    </header>
);

export default Header;
