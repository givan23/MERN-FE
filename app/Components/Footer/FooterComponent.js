import React from "react";
import {COL_3} from "../../Core/Costants/CentralContentConstants";

export const FooterComponent = ({cssClass = "", firstSectionList, secondSectionList, thirdSectionList, numberSections}) => {

    return <div className="footer-container">
        <div className="footer-section-container">

            <div className={"footer-section " + cssClass}>
                <ul>
                    <SectionDetail SectionList={firstSectionList}/>
                </ul>
            </div>

            <DivideSectionLineComponent cssClass={cssClass}/>

            <div className={"footer-section " + cssClass}>
                <ul>
                    <SectionDetail SectionList={secondSectionList}/>
                </ul>

            </div>

            <DivideSectionLineComponent cssClass={cssClass}/>

            <div className={"footer-section " + cssClass}>
                <ul>
                    <SectionDetail SectionList={thirdSectionList}/>
                </ul>
            </div>
        </div>
    </div>
};


const SectionDetail = ({SectionList = []})=> {

    return SectionList.map((item,i) => {
        return <li key={i}><div>{item.detail}</div></li>
    });
};

const DivideSectionLineComponent = ({cssClass})=> {

    return <div className={ cssClass === COL_3 ?  "footer-vertical-line" : "footer-horizontal-line" }/>

};