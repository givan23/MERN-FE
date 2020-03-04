import React from "react";

export const HorseRacerEventDescription = ({
                                               event= "",
                                               discipline= "",
                                               winningLabel,
                                               placeTwoLabel,
                                               placeThreeLabel }) => {


    return <>
        <div className="horse-event-description">{event + " - " + discipline}</div>
        <div className="horse-bet-container">
            <div className="horse-title-bet">{winningLabel}</div>
            <div className="horse-title-bet">{placeTwoLabel}</div>
            <div className="horse-title-bet">{placeThreeLabel}</div>
        </div>
    </>
};


