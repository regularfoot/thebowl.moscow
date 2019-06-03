import React from 'react';
import styled from 'reshadow';

const Section = ({Tag = 'section', shade = 'dark', children, ...props}) => styled`
    Tag {
        width: 100%;
        &[|shade='dark'] {
            background-color: rgb(19, 20, 19);
        }
        &[|shade='accent'] {
            background-color: rgb(118, 48, 119);
        }
    }
    inner {
        width: 90%;
        max-width: 900px;
        display: block;
        margin: 40px auto;
        color: #fff;
    }
`(
    <Tag use:shade={shade} {...props}>
        <inner>{children}</inner>
    </Tag>
);

export default Section;
