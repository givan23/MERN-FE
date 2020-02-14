import createReducer from "../../Utils/CreateReducerUtils"

const initState= {
 testProps: "test",
 isTrue: true
};

const testAction = (draft, action) => {
    draft.isTrue = !draft.isTrue
};

export default createReducer({
    TEST_ACTION: testAction
}, initState);