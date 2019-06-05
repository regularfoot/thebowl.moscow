import React from 'react';
import styled from 'reshadow';

import Section from '../Section';

const LastYearVideo = () => styled`
    intro {
        display: flex;
        flex-flow: nowrap row;
    }
    left {
        width: 66%;
    }
    img {
        max-width: 100%;
    }
    videoWrapper {
        padding: 56.25% 0 0 0;
        position: relative;
    }
`(
    <Section title="TheBowl4">
        <videoWrapper>
            <iframe
                src="https://player.vimeo.com/video/340422924"
                style={{position:'absolute',top:0,left:0,border: 0,width:'100%',height:'100%'}}
                allow="autoplay; fullscreen"
                allowfullscreen
            />
        </videoWrapper>
        <script src="https://player.vimeo.com/api/player.js" />
    </Section>
);

export default LastYearVideo;
