import React from 'react';
import Head from 'next/head';

const Meta = () => (
    <Head>
        <title>THE BOWL 5</title>
        <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
        />
        <meta
            name="description"
            content="THEBOWL5 BMX & SKATE 15 июня в парке садовники, вход бесплатный, скейтмаркет и live music"
        />
        <style>{`
        body,
        html {
            width: 100%;
            height: 100%;
            padding: 0;
            margin: 0;
            background-color: rgb(19, 20, 19);
            font-family: circle-extra, sans-serif;
        }
        header + section {
            color: #fff;
        }
        @font-face {
            font-family: "circle-extra";
            src: url("../static/font/Circe-ExtraBold.woff2") format("woff2"),
                  url("../static/font/Circe-ExtraBold.woff") format("woff"),
                  url("../static/font/Circe-ExtraBold.ttf") format("ttf");
        }

            `}</style>
    </Head>
);

export default Meta;
