import {
    NUMBER_ONE,
    NUMBER_THREE,
    NUMBER_TWO,
    PHONE_SCREEN_480,
    TABLET_SCREEN_768
} from "../Core/Costants/GenericConstants";
import {COL_1, COL_2, COL_3} from "../Core/Costants/CentralContentConstants";

export const giveMeClass = (cardList, screenSize) => {
    let cardListNew = [];
    let cssClass = COL_3;

    cardList.map((item, i) => {

        if (screenSize > TABLET_SCREEN_768) {

            cssClass = COL_3;

            //7 ELEMENTS
            cssClass = ((cardList.length % NUMBER_THREE === NUMBER_ONE) && (i === cardList.length - NUMBER_ONE)) ? COL_1 : cssClass;

            //8 ELEMENTS
            cssClass = ((cardList.length % NUMBER_THREE === NUMBER_TWO) && (i === cardList.length - NUMBER_TWO)) ? COL_2 : cssClass;

            cssClass = ((cardList.length % NUMBER_THREE === NUMBER_TWO) && (i === cardList.length - NUMBER_ONE)) ? COL_2 : cssClass;

            cardListNew.push({
                ...item,
                cssClass: cssClass
            });

        }

        if ((screenSize < TABLET_SCREEN_768) && (screenSize > PHONE_SCREEN_480)) {

            cssClass = COL_2;

            //8 ELEMENTS
            cssClass = ((cardList.length % NUMBER_TWO === NUMBER_ONE) && (i === cardList.length - NUMBER_ONE)) ? COL_1 : cssClass;

            cardListNew.push({
                ...item,
                cssClass: cssClass
            });
        }
        if (screenSize < PHONE_SCREEN_480) {

            cardListNew.push({
                ...item,
                cssClass: COL_1
            });
        }
    });

    return cardListNew;
};

//this method selects cardList based on the code chosen
export const selectCardList = (data, code) => {

    const {result = {}} = data;
    const {centralContent = {}} = result;
    const {cardStatic = {}} = centralContent;

    let cardList = centralContent[code].cardList;

    return {
        ...result,
        centralContent: {
            cardStatic,
            cardList: cardList || []
        }
    };
};

export const giveMeClassFooter = (screenSize) => {

    let cssClass = screenSize > TABLET_SCREEN_768 ? COL_3 : COL_1;

    return cssClass;
};