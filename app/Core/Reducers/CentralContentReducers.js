import createReducer from "../../Utils/CreateReducerUtils"


const storedCardList = (draft, action) => {

    draft.cardList = action.cardList;
};

const onResizeEvent = (draft, action) => {

    draft.screenSize = action.screenSize;
};


const initState = {
    cardList: [],
    screenSize: window.innerWidth
};

export default createReducer({

    STORED_CARD_LIST: storedCardList,
    ON_RESIZE_EVENT: onResizeEvent
}, initState);