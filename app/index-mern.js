import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from "./Store/CreateStore";
//import {onRandomInterval} from "./Core/Actions/HorseRacerActions";
//import {arrayRandom} from "./Utils/RandomUtils";
import {
    CENTRAL_CONTENT_SELECTOR,
    ERROR_WRAPPER_FOUND,
    FOOTER_SELECTOR,
    HEADER_SELECTOR
} from "./Core/Costants/IndexConstants";
import HeaderContainer from "./Containers/Header/HeaderContainer";
import FooterContainer from "./Containers/Footer/FooterContainer";
import CentralContentContainer from "./Containers/CentralContent/CentralContentContainer";
import {ListenerUtils} from "./Utils/ListenerUtils";


export const renderHeader = store => {

    const headerWrapper = document.getElementById(HEADER_SELECTOR);

    if (headerWrapper) {
        render(
            <Provider store={store}>
                <HeaderContainer/>
            </Provider>,
            headerWrapper
        );
    } else {
        console.warn(ERROR_WRAPPER_FOUND);
    }
};


export const renderCentralContent = store => {

    const centralContentWrapper = document.getElementById(CENTRAL_CONTENT_SELECTOR);

    if (centralContentWrapper) {
        render(
            <Provider store={store}>
                <CentralContentContainer/>
            </Provider>,
            centralContentWrapper
        );
    } else {
        console.warn(ERROR_WRAPPER_FOUND);
    }
};


export const renderFooter = store => {
    const footerWrapper = document.getElementById(FOOTER_SELECTOR);

    if (footerWrapper) {
        render(
            <Provider store={store}>
                <FooterContainer/>
            </Provider>,
            footerWrapper
        );
    } else {
        console.warn(ERROR_WRAPPER_FOUND);
    }
};


//setInterval(() => store.dispatch(onRandomInterval(arrayRandom())), 5000);


renderHeader(store);
renderCentralContent(store);
renderFooter(store);
ListenerUtils(store);


