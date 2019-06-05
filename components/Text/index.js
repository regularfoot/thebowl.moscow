import React from 'react';
import styled from 'reshadow';

const Text = ({children, color}) => styled`
    span {
        &[|color="accent"] {
            color: #763077; 
            color: #853286; 
        }
        &[|color="dark"] {
            color: #131413; 
        }
        &[|color="light"] {
            color: #fff; 
        }
    }
`(<span use:color={color}>{children}</span>);

export default Text;
