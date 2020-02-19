import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import HorseRacerComponent from "../Components/RACE/HorseRacerComponent";
import {onRaceClick} from "../Core/Actions/HorseRacerActions";


const getHorseRacerReducers = (state) => state.horseRacerReducers;

const mapStateToProps = createSelector(
    [getHorseRacerReducers],
    (horseRacerReducers) => {

        const {channelId = "", disciplineDescription = "", winningPlaceBet = []} = horseRacerReducers;

        return {
            channelId,
            disciplineDescription,
            winningPlaceBet

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