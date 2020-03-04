import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {FooterComponent} from "../../Components/Footer/FooterComponent";


const mapStateToProps = createSelector(
    [],
    () => {

        return {

        };
    });

const mapDispatchToProps = dispatch => {

    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);

