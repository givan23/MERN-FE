import {INIT_CENTRAL_CONTENT, STORED_ALIAS_URL_LIST} from "../Costants/CentralContentConstants";

export const initCentralContent = () => {

    return {
        type: INIT_CENTRAL_CONTENT
    }
};

export const storedAliasUrlList = (aliasUrlList) => {

    return {
        type: STORED_ALIAS_URL_LIST,
        aliasUrlList
    }
};
