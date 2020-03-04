import React from 'react';
import {HorseRacerOddList} from "./HorseRacerOddList";
import {HorseRacerEventDescription} from "./HorseRacerEventDescription";

export const HorseRacerComponent = ({
                                        odds = [],
                                        eventDescription,
                                        disciplineDescription,
                                        winningRacerName,
                                        placeTwoRacerName,
                                        placeThreeRacerName }) => {

        return (
            <div className="horse-central-container">
                <HorseRacerEventDescription event={eventDescription}
                                            discipline={disciplineDescription}
                                            winningLabel={winningRacerName.betDescription || ""}
                                            placeTwoLabel={placeTwoRacerName.betDescription || ""}
                                            placeThreeLabel={placeThreeRacerName.betDescription || ""}/>
                <div className="horse-odd-container">
                    <HorseRacerOddList odds={odds}/>
                </div>
            </div>
        );

};

export default HorseRacerComponent;