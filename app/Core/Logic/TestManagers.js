import {createLogic} from "redux-logic";
import {TEST_ACTION} from "../Costants/TestCostants";

export const testManager = createLogic({
    type: [TEST_ACTION],

    process({action}, dispatch, done) {
        done();
    }
});

export const TestManagers = [testManager];