import React from "react";
import {NUMBER_ONE} from "../../../Core/Costants/GenericConstants";
import {COL_3} from "../../../Core/Costants/CentralContentConstants";

export const LineSeparatorComponent = ({index, footerSectionList = [], cssClass = ""}) => {

    return (index !== footerSectionList.length - NUMBER_ONE) ?
        <div className={cssClass === COL_3 ? "footer-vertical-line" : "footer-horizontal-line"}/> : null;
};
