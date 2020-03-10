import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {giveMeClassFooter} from "../../Utils/CentralContentUtils";
import {FooterComponent} from "../../Components/Footer/FooterComponent";


const getScreenSize = (state) => state.centralContentReducers.screenSize;


const mapStateToProps = createSelector (
    [getScreenSize],
    (screenSize) => {

        return {
            cssClass: giveMeClassFooter(screenSize),
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);

