import React from "react";
import {TABLET_SCREEN_768} from "../../Core/Costants/GenericConstants";

export const CentralContentComponent = ({screenSize, aliasUrlList}) => {

    return <div className = "card-container" >
        <CardsComponent aliasUrlList={aliasUrlList} screenSize={screenSize}/>
    </div>

};

const CardsComponent = ({aliasUrlList, screenSize}) => {

    return aliasUrlList.map((aliasUrl, index) => {
        let cssClass = giveMeClass(aliasUrlList, index, screenSize);
        return <div key={index} className={cssClass + " card-item"}>
            <img className="card-img" src={aliasUrl} alt="/#"/>
        </div>
    });
};

const giveMeClass = (arr, i, screenSize) => {
    let cssClass = "";

    //desktop
    if(screenSize > TABLET_SCREEN_768){

        //default-desktop
        cssClass = "col-3";

        //first elements
        if(i === 0) {
            cssClass = "col-1";
        }

        //8 elements
        if ( (arr.length % 3 === 2) && (i === arr.length - 1) ) {
            cssClass = "col-1";
        }

        if ( (arr.length % 3 === 2) && (i === arr.length - 1) ) {
            cssClass = "col-1";
        }

        //9 elements
        if ( (arr.length % 3 === 0) && (i === arr.length - 2 ) ) {
            cssClass = "col-2";
        }

        if ( (arr.length % 3 === 0) && (i === arr.length - 1 ) ) {
            cssClass = "col-2";
        }

    //mobile
    }else {
        //default-mobile
        cssClass = "col-1";
    }
    return cssClass;
};