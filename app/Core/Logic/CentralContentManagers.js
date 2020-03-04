import {createLogic} from "redux-logic";
import "babel-polyfill";
import {storedAliasUrlList} from "../Actions/CentralContentActions";
import {INIT_CENTRAL_CONTENT} from "../Costants/CentralContentConstants";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../Costants/NetworkConstants";


export const centralContentManager = createLogic({
    type: [INIT_CENTRAL_CONTENT],

    process({action, getState}, dispatch, done) {
        try {

            const data = {code: 1, aliasUrlList: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l"]};

            if (data.code === RESPONSE_CODE_SUCCESS) {

                dispatch(storedAliasUrlList(data.aliasUrlList));

            } else { console.log(NETWORK_CALL_ERROR); }

        } catch (error) { console.log(NETWORK_CALL_ERROR, error); }

        done();
    }
});

export const CentralContentManagers = [centralContentManager];