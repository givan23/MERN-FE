import {ON_RACER_CLICK, ON_RANDOM_INTERVAL, STORED_RACER_CLICK} from "../Costants/HorseRacerConstants";


export function onRaceClick() {
    return {
        type: ON_RACER_CLICK,
    };
}

export function storedRaceClick(response) {
    return {
        type: STORED_RACER_CLICK,
        response
    };
}

export function onRandomInterval(randomArray) {
    return {
        type: ON_RANDOM_INTERVAL,
        randomArray
    };
}

