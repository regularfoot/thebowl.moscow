import React from 'react';
import styled from 'reshadow';

import styles from './style.css';

const Section = ({
    Tag = 'section',
    shade = 'dark',
    title,
    className,
    children,
    ...props
}) => styled(styles)(
    <Tag use:shade={shade} {...props}>
        <inner className={className}>
            {title && <title as="h2">{title}</title>}
            {children}
        </inner>
    </Tag>
);

export default Section;
