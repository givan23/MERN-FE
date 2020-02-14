import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import TestComponent from "../Components/Test/TestComponent";
import {testAction} from "../Core/Actions/TestCreateAction";


const getTestReducer = (state) => state.testReducer;

const mapStateToProps = createSelector(
    [getTestReducer],
    (testReducer) => {
        const {testProps = "", isTrue = true} = testReducer;

        return {
            testProps,
            isTrue
        };
    });

const mapDispatchToProps = dispatch => {

    return {
        testAction: () => {
            dispatch(testAction());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);