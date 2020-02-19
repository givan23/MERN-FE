import {ON_RACER_CLICK, STORED_RACER_CLICK} from "../Costants/TestCostants";

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