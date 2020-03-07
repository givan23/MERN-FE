import React from "react";
import {COL_1} from "../../Core/Costants/CentralContentConstants";

export const CardsContentComponent = ({cardList = [], cardStatic = {}}) => {

    return <div className="card-container">
        <CardMainComponent cardStatic={cardStatic}/>
        <CardsSecondaryComponent cardList={cardList}/>
    </div>
};

const CardMainComponent = ({cardStatic}) => {
    let {url = ""} = cardStatic;

    return <div className={"card-main-container " + COL_1}>
        <div className="card-main">
            <img className="card-img" src={url} alt="/#"/>
        </div>
    </div>
};

const CardsSecondaryComponent = ({cardList}) => {

    return cardList.map((card, index) => {
        let {url = "", cssClass = ""} = card;

        return <div key={index} className={"card-secondary-container " + cssClass}>
            <div className="card-secondary">
                <img className="card-img" src={url} alt="/#"/>
            </div>
        </div>

    });
};
