import {createLogic} from "redux-logic";
import "babel-polyfill";
import {storedCardList} from "../Actions/CentralContentActions";
import {INIT_CENTRAL_CONTENT} from "../Costants/CentralContentConstants";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../Costants/NetworkConstants";


const centralContentManager = createLogic({
    type: [INIT_CENTRAL_CONTENT],

    process({action, getState}, dispatch, done) {

        try {

            const data = { code: 1, cardList: [ {url:"a"}, {url:"b"}, {url:"c"}, {url:"d"}, {url:"e"}, {url:"f"}, {url:"g"}, {url:"h"}, {url:"i"}, {url:"l"} ] };

            if (data.code === RESPONSE_CODE_SUCCESS) {

                dispatch(storedCardList(data.cardList));

            } else { console.log(NETWORK_CALL_ERROR); }

        } catch (error) { console.log(NETWORK_CALL_ERROR, error); }

        done();
    }
});

export const CentralContentManagers = [centralContentManager];
