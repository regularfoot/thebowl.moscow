import React from 'react';
import styled from 'reshadow';

import styles from './style.css';

const Text = ({children, color}) => styled(styles)(
    <span use:color={color}>{children}</span>
);

export default Text;
