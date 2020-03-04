import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {HeaderComponent} from "../../Components/Header/HeaderComponent";


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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

