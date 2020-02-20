import {createLogic} from "redux-logic";
import {ON_RACER_CLICK, RESPONSE_CODE_SUCCESS} from "../Costants/TestCostants";
import {storedRaceClick} from "../Actions/HorseRacerActions";
import {axiosService} from "../Network/AxiosSettings";
import {GET_METHOD} from "../Costants/NetworkConstants";
import "babel-polyfill";

export const horseRacerManager = createLogic({
    type: [ON_RACER_CLICK],

   async process({action, getState}, dispatch, done) {
        try {
            const {data} = await axiosService(GET_METHOD);
            const _data = data[0] || {};

            if(_data.code === RESPONSE_CODE_SUCCESS) {

                dispatch(storedRaceClick(_data.result));

           } else {
            console.error("object no found!");
            }
        } catch (error) { console.error(error); }

        done();
    }
});

export const HorseRacerManagers = [horseRacerManager];

