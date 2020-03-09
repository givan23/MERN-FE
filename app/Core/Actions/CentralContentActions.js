import {INIT_CENTRAL_CONTENT, ON_DETAIL_CARD, STORED_CARD_LIST} from "../Costants/CentralContentConstants";

export const initCentralContent = () => {

    return {
        type: INIT_CENTRAL_CONTENT
    }
};

export const storedCardList = (result) => {

    return {
        type: STORED_CARD_LIST,
        result
    }
};

export const onDetailCard = (code) => {

    return {
        type: ON_DETAIL_CARD,
        code
    }
};
