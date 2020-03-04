import createReducer from "../../Utils/CreateReducerUtils"


const storedAliasUrlList = (draft, action) => {

    draft.aliasUrlList = action.aliasUrlList;
};

const onResizeEvent = (draft, action) => {

    draft.screenSize = action.screenSize;
};


const initState = {
    aliasUrlList: [],
    screenSize: window.innerWidth
};

export default createReducer({

    STORED_ALIAS_URL_LIST: storedAliasUrlList,
    ON_RESIZE_EVENT: onResizeEvent
}, initState);