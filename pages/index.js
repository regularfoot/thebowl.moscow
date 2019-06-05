import Link from "next/link";
import styled from 'reshadow';
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Guests from "../components/Guests";
import Map from "../components/Map";
import Meta from "../components/Meta";
import LastYearVideo from "../components/LastYearVideo";
import {skaters} from '../data';

export default () => styled`
    :global(body),
    :global(html) {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        background-color: rgb(19, 20, 19);
        font-family: sans-serif;
    }
`(
  <main>
    <Header />
    <Meta />
    <Intro />
    <Hero />
    <LastYearVideo />
    <Guests guests={skaters} />
    <Map />
  </main>
);
