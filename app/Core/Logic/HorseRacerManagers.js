import {createLogic} from "redux-logic";
import {storedRaceClick} from "../Actions/HorseRacerActions";
import {axiosService} from "../Network/AxiosSettings";
import "babel-polyfill";
import {GET_METHOD, RESPONSE_CODE_SUCCESS} from "../Costants/NetworkConstants";
import {ON_RACER_CLICK} from "../Costants/HorseRacerConstants";



export const horseRacerManager = createLogic({
    type: [ON_RACER_CLICK],

   async process({action, getState}, dispatch, done) {
        try {
            const {data} = await axiosService(GET_METHOD);
            const _data = data[0] || {};
            console.log(_data);

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

