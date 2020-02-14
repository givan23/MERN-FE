import React from 'react';
import {TitleTestComponent} from "./TestTitleComponent";
import {ButtonTestComponent} from "./TestButtonComponent";
import {testPropsAreEqual} from "../../Utils/TestUtils";

const _TestComponent = ({testProps, isTrue, testAction}) => {

    return (
        <>
            <TitleTestComponent testProps={testProps} isTrue={isTrue}/>
            <ButtonTestComponent testAction={testAction}/>
        </>
    );
};
const TestComponent = React.memo(_TestComponent, testPropsAreEqual);

export default TestComponent;
