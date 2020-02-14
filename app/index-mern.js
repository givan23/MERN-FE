import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from "./Store/CreateStore";
import TestContainers from "./Containers/TestContainer";


export const renderTest = store => {

    const testWrapper = document.getElementById('root');

    if (testWrapper) {
        render(
            <Provider store={store}>
                <TestContainers/>
            </Provider>,
            testWrapper
        );
    } else {
        console.warn("No testWrapper found!");
    }
};

renderTest(store);
