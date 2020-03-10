import React from "react";

export const FooterComponent = ({cssClass = ""}) => {

    return <div className="footer-container">

        <div className={"footer-section " +  cssClass}>
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

        <div className="footer-vertical-line"/>

        <div className={"footer-section " +  cssClass}>
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

        <div className="footer-vertical-line"/>

        <div className={"footer-section " +  cssClass}>
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
};