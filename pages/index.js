import Intro from "../components/Intro";
import Hero from "../components/Hero";
import Header from "../components/Header";
import Guests from "../components/Guests";
import Map from "../components/Map";
import Meta from "../components/Meta";
import LastYearVideo from "../components/LastYearVideo";
import WhatIsIt from "../components/WhatIsIt";
import Reglament from '../components/Reglament';
import {skaters, bmxers} from '../data';

export default () => (
  <main>
    <Meta />
    <Header />
    <Intro />
    <Hero />
    <LastYearVideo />
    <WhatIsIt />
    <Guests guests={skaters} title="СКЕЙТ" />
    <Guests guests={bmxers} title="BMX" />
    <Reglament />
    <Map />
  </main>
);
