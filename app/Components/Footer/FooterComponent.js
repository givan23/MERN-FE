import React from "react";
import {LineSeparatorComponent} from "./FooterChildren/LineSeparatorComponent";
import {FollowUsComponent} from "./FooterChildren/FollowUsComponent";
import {NUMBER_ONE, NUMBER_TWO} from "../../Core/Costants/GenericConstants";


export const FooterComponent = ({cssClass = "", footerSectionList = []}) => {

    return <div className="footer-container">
        <div
            className={footerSectionList.length < 3 ? "footer-section-container justify-space-evenly" : "footer-section-container"}>
            <SectionListComponent cssClass={cssClass} footerSectionList={footerSectionList}/>
        </div>
    </div>
};

const SectionListComponent = ({cssClass = "", footerSectionList = []}) => {

    return footerSectionList.map((detailObj, index) => {
        let detailList = Object.values(detailObj);
        let details = detailList.reduce((acc, detail) => detail, []);
        let addMarginLeft = (index === footerSectionList.length - NUMBER_ONE) ? "add-margin-left" : null;

        return <>
            <div key={index} className={"footer-section " + cssClass}>
                <ul>
                    <SectionDetailsComponent details={details} addMarginLeft={addMarginLeft}/>
                    {(index === footerSectionList.length - NUMBER_ONE) ? <FollowUsComponent/> : null}
                </ul>
            </div>
            <LineSeparatorComponent index={index} footerSectionList={footerSectionList} cssClass={cssClass}/>
        </>
    })
};

const SectionDetailsComponent = ({details = [], addMarginLeft = ""}) => {

    return details.map((detail, i) => {
        return <li key={i} className={addMarginLeft}>
            <a href={detail.url}>{detail.detail}</a>
        </li>
    });
};