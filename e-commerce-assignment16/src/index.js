import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/header/header';
import LaptopSection from './components/laptopSection/laptopSection';
import TvSection from './components/tvSection/tvSection';
import HeadPhoneSection from './components/headPhoneSection/headPhoneSection';
import ItemDetails from './components/itemDetails/itemDetails';

// CSS
import './css/index.css';

const Root = () => {
    return (
        <React.Fragment>
            <Header />
            <LaptopSection />
            <TvSection />
            <HeadPhoneSection />
            <ItemDetails />
        </React.Fragment>
    );
};

ReactDom.render(<Root />, document.getElementById('root'));
