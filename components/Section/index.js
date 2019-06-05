import React from 'react';
import styled from 'reshadow';

const Section = ({Tag = 'section', shade = 'dark', title, className, children, ...props}) => styled`
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
    title {
        text-align: center;
        text-transform: uppercase;
        font-size: 34px;
        margin: 16px 0;
    }

    @media only screen and (min-width: 600px) {
        inner {
            margin: 80px auto;
        }
    }
`(
    <Tag use:shade={shade} {...props}>
        <inner className={className}>
            {title && <title as="h2">{title}</title>}
            {children}
        </inner>
    </Tag>
);

export default Section;
