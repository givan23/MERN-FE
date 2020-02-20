import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import HorseRacerComponent from "../Components/RACE/HorseRacerComponent";
import {onRaceClick} from "../Core/Actions/HorseRacerActions";


const getHorseRacerReducers = (state) => state.horseRacerReducers;

const mapStateToProps = createSelector(
    [getHorseRacerReducers],
    (horseRacerReducers) => {

        const {winningRacerName = [], winningOdds= [], placeTwoRacerName= [], placeTwoOdds= [], placeThreeRacerName= [], placeThreeOdds= [], subscribeDate= "", disciplineDescription = ""} = horseRacerReducers;

        return {
            winningRacerName,
            winningOdds,
            placeTwoRacerName,
            placeTwoOdds,
            placeThreeRacerName,
            placeThreeOdds,
            subscribeDate,
            disciplineDescription
        };
    });

const mapDispatchToProps = dispatch => {

    return {
        onRaceClick: () => {
            dispatch(onRaceClick());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HorseRacerComponent);