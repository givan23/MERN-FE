import {INIT_CENTRAL_CONTENT, STORED_CARD_LIST} from "../Costants/CentralContentConstants";

export const initCentralContent = () => {

    return {
        type: INIT_CENTRAL_CONTENT
    }
};

export const storedCardList = (cardList) => {

    return {
        type: STORED_CARD_LIST,
        cardList
    }
};
