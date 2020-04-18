import React, { Fragment } from 'react';
import Header from '../Header/Header';
import LoveApp from '../LoveApp/LoveApp';
import StartMan from '../StartMan/StartsMan';
import Pricing from '../Pricing/Pricing';
import Footer from '../Footer/Footer';

export default function Layout() {
    return(
        <Fragment>
            <Header />
            <LoveApp />
            <StartMan />
            <Pricing />
            <Footer />
        </Fragment>
    )
}