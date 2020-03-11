import React from "react";
import {COL_3} from "../../Core/Costants/CentralContentConstants";

export const FooterComponent = ({cssClass = ""}) => {

    return <div className="footer-container">
        <div className="footer-section-container">

            <div className={"footer-section " + cssClass}>
                <ul>
                    <li>-footer 1-</li>
                    <li>-footer 2-</li>
                    <li>-footer 3-</li>
                    <li>-footer 4-</li>
                    <li>-footer 5-</li>
                    <li>-footer 6-</li>
                    <li>-footer 7-</li>
                </ul>
            </div>
            <div className={ cssClass === COL_3 ?  "footer-vertical-line" : "footer-horizontal-line" }/>
            <div className={"footer-section " + cssClass}>
                <ul>
                    <li>-footer 1-</li>
                    <li>-footer 2-</li>
                    <li>-footer 3-</li>
                    <li>-footer 4-</li>
                    <li>-footer 5-</li>
                    <li>-footer 6-</li>
                    <li>-footer 7-</li>
                </ul>

            </div>
            <div className={ cssClass === COL_3 ?  "footer-vertical-line" : "footer-horizontal-line" }/>
            <div className={"footer-section " + cssClass}>
                <ul>
                    <li>-footer 1-</li>
                    <li>-footer 2-</li>
                    <li>-footer 3-</li>
                    <li>-footer 4-</li>
                    <li>-footer 5-</li>
                    <li>-footer 6-</li>
                    <li>-footer 7-</li>
                </ul>
            </div>
        </div>
    </div>
};