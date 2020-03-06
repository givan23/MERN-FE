import React from "react";

export const CardsContentComponent = ({cardList = []}) => {

    return <div className="card-container">
        <CardsComponent cardList={cardList}/>
    </div>
};

const CardsComponent = ({cardList}) => {

    return cardList.map((card, index) => {
        let {url = "", cssClass = ""} = card;

        let hover = index === 0 ? "" : "card-hover";

        return <div key={index} className={cssClass + " card-item-content"}>
                <div className={ "card-item "+ hover }>
                    <img className="card-img" src={url} alt="/#"/>
                </div>
        </div>

    });
};
