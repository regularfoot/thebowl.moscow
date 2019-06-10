import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Text from '../Text';

const Title = () => <span>
    <Text color="accent">the</Text> bowl <Text color="accent">4</Text>
</span>;

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
    <Section title={<Title />}>
        <videoWrapper>
            <iframe
                src="https://player.vimeo.com/video/340422924"
                style={{position:'absolute',top:0,left:0,border: 0,width:'100%',height:'100%'}}
                allow="autoplay; fullscreen"
                allowFullScreen
                title="видео отчет the bowl 4"
            />
        </videoWrapper>
    </Section>
);

export default LastYearVideo;
