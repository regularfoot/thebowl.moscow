import Link from "next/link";
import styled from 'reshadow';
import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Guests from "../components/Guests";
import Map from "../components/Map";
import {skaters} from '../data';

export default () => styled`
    :global(body),
    :global(html) {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        background-color: rgb(19, 20, 19);
    }
`(
  <main>
    <Intro />
    <Hero />
    <Guests guests={skaters} />
    <Map />
  </main>
);
