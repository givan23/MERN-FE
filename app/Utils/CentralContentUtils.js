import {TABLET_SCREEN_768} from "../Core/Costants/GenericConstants";
import {COL_1, COL_2, COL_3} from "../Core/Costants/CentralContentConstants";

export const giveMeClass = (cardList, screenSize) => {
    let cardListNew = [];
    let cssClass = COL_3;

    cardList.map((item, i) => {

        if(screenSize > TABLET_SCREEN_768) {

                cssClass = COL_3;

                //first elements
                if (i === 0) {
                    cssClass = COL_1;
                }

                //8 elements
                if ((cardList.length % 3 === 2) && (i === cardList.length - 1)) {
                    cssClass = COL_1;
                }

                if ((cardList.length % 3 === 2) && (i === cardList.length - 1)) {
                    cssClass = COL_1;
                }

                //9 elements
                if ((cardList.length % 3 === 0) && (i === cardList.length - 2)) {
                    cssClass = COL_2;
                }

                if ((cardList.length % 3 === 0) && (i === cardList.length - 1)) {
                    cssClass = COL_2;
                }

                cardListNew.push({
                    ...item,
                    cssClass: cssClass
                });

        }else {

          cardListNew.push({
                ...item,
                cssClass: COL_1
            });
        }
    });


    return cardListNew;
};