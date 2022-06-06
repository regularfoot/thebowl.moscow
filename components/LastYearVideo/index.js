import React from 'react';
import styled from 'reshadow';

import Section from '../Section';
import Text from '../Text';

import styles from './style.css';

const Title = () => <span>
    <Text color="accent">the</Text> bowl <Text color="accent">5</Text>
</span>;

const LastYearVideo = () => {
    const [shouldRender, onRenderChange] = React.useState(false);
    React.useEffect(() => {
        if (window.scrollY > 0) {
            onRenderChange(true);
            return;
        }
        window.addEventListener('scroll', () => onRenderChange(true), {
            once: true,
        });
    });

    return styled(styles)(
        <Section title={<Title />}>
            <videoWrapper>
                {
                    shouldRender
                        ? (
                            <iframe src="https://vk.com/video_ext.php?oid=-55525418&id=456239060&hash=4c41ada7b1b65932&hd=2"
                                    width="853" height="480"
                                    title="видео отчет the bowl 5"
                                    allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameBorder="0"
                                    allowFullScreen/>
                        ) : null
                }
            </videoWrapper>
        </Section>
    )
};

export default LastYearVideo;
