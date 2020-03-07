import createReducer from "../../Utils/CreateReducerUtils"


const storedCardList = (draft, action) => {
    const {headerContent = {}, centralContent = {}} = action.result;

    draft.headerContent = headerContent;
    draft.centralContent = centralContent;
};

const onResizeEvent = (draft, action) => {

    draft.screenSize = action.screenSize;
};


const initState = {
    headerContent: {},
    centralContent: {},
    screenSize: window.innerWidth
};

export default createReducer({

    STORED_CARD_LIST: storedCardList,
    ON_RESIZE_EVENT: onResizeEvent
}, initState);