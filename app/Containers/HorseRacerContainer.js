import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import HorseRacerComponent from "../Components/Races/HorseRacerComponent";
import {onRaceClick} from "../Core/Actions/HorseRacerActions";


const getHorseRacerReducers = (state) => state.horseRacerReducers;

const mapStateToProps = createSelector(
    [getHorseRacerReducers],
    (horseRacerReducers) => {

        const {winningRacerName = [], placeTwoRacerName = [], placeThreeRacerName = [], subscribeDate = "", channelId = "", disciplineCode = "", disciplineDescription = "", eventDescription = "", odds} = horseRacerReducers;


        return {
            channelId,
            disciplineCode,
            eventDescription,
            disciplineDescription,
            subscribeDate,
            //TODO propagate odds
            winningRacerName,
            placeTwoRacerName,
            placeThreeRacerName,
            odds

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