import React from "react";

export const RowListComponent = ({indexNew, show, onClearAllPopap, onShowPopap}) => {
    let rowList = [{placeholder: "Romolo", sizeMargin: "0 0 0 30px", show: true},{placeholder: "Remo", sizeMargin: "0 0 0 60px", show: false}];

    return rowList.map((item, index) => {

        return <div key={index} style={{display: "block", height: "60px", background: "#e4e5e0", margin: "0 0 10px 0"}} onClick={onClearAllPopap}>
            <RowComponent placeholder={item.placeholder} sizeMargin={item.sizeMargin} index={index} indexNew={indexNew} show={show} onShowPopap={onShowPopap}/>
        </div>

    });
};

const RowComponent = ({placeholder, sizeMargin, index, indexNew, show, onShowPopap}) => {
    const handleOnShowPopap = () => onShowPopap(index);
    let Popap = show && index === indexNew ? <PopapComponent/> : null;
    return <div style={{margin: sizeMargin, width: "50px", height: "50px", background: "#5f5f5f" }} onClick={handleOnShowPopap}>{placeholder}
        {Popap}
    </div>

};

const PopapComponent = ({}) => {
    return <div style={{width: "100px", height: "100px", background: "#efefef"}}>{"testo,testo,testo"}</div>

};

