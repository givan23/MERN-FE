import React from 'react';
import HorseRacerOdd from "./HorseRacerOdd";

export const HorseRacerOddList = ({odds}) => {

    return odds.map((odd, index) => {
        return <HorseRacerOdd key={index} odd={odd}/>
    });
};
