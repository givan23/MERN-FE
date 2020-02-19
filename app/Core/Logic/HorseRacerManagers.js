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

            console.log("data", data);

            //if(data.code === RESPONSE_CODE_SUCCESS) {

                // dispatch(storedRaceClick(data.result));

           // } else {
               // console.error("object no found!");
            //}
        } catch (error) { console.error(error.message); }

        done();
    }
});

export const HorseRacerManagers = [horseRacerManager];

// const data = {
//     code: 1,
//         result: {
//     channelId: 1,
//         disciplineDescription: "Campionato Regionale di Ippica",
//         winningPlaceBet: [
//         {
//             win: "Artax",
//             odds: 300,
//         },{
//             win: "Scalto",
//             odds: 350,
//         }, {
//             win: "Furia",
//             odds: 200,
//         }
//     ]
// }
// };
