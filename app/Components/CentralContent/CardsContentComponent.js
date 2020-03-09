import React from "react";
import {COL_1} from "../../Core/Costants/CentralContentConstants";

export const CardsContentComponent = ({cardList = [], cardStatic = {}, onDetailCard}) => {

    return <div className="card-container">
        <CardMainComponent cardStatic={cardStatic}/>
        <CardsSecondaryComponent cardList={cardList} onDetailCard={onDetailCard}/>
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

const CardsSecondaryComponent = ({cardList, onDetailCard}) => {

    return cardList.map((card, index) => {
        let {path = "", code= "", cssClass = ""} = card;
         const handlerDetailCard = () => onDetailCard(code);

        return <div key={index} className={"card-secondary-container " + cssClass} onClick={code ? handlerDetailCard : null}>>
            <div className="card-secondary">
                <img className="card-img" src={path} alt="/#"/>
            </div>
        </div>

    });
};
