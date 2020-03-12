import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {giveMeClassFooter} from "../../Utils/CentralContentUtils";
import {FooterComponent} from "../../Components/Footer/FooterComponent";


const getScreenSize = (state) => state.centralContentReducers.screenSize;


const mapStateToProps = createSelector(
    [getScreenSize],
    (screenSize) => {

        const footerSectionList = getSectionLists(); //todo pun in manager
        const numberSections = Object.values(getSectionLists()).length;
        const {firstSectionList = [], secondSectionList = [], thirdSectionList = []}=footerSectionList;

        return {
            cssClass: giveMeClassFooter(screenSize),
            firstSectionList,
            secondSectionList,
            thirdSectionList,
            numberSections
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {};
};


export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent);


const getSectionLists = () => {

    return {
        firstSectionList: [
            {"code": 1, "detail": "detail-1", "url": "/url1"},
            {"code": 2, "detail": "detail-2", "url": "/url2"},
            {"code": 3, "detail": "detail-3", "url": "/url3"},
            {"code": 4, "detail": "detail-4", "url": "/url4"},
            {"code": 5, "detail": "detail-5", "url": "/url5"},
            {"code": 6, "detail": "detail-6", "url": "/url6"},
            {"code": 7, "detail": "detail-7", "url": "/url7"},
            {"code": 8, "detail": "detail-8", "url": "/url8"}
        ],
        secondSectionList: [
            {"code": 1, "detail": "detail-1", "url": "/url1"},
            {"code": 2, "detail": "detail-2", "url": "/url2"},
            {"code": 3, "detail": "detail-3", "url": "/url3"},
            {"code": 4, "detail": "detail-4", "url": "/url4"},
            {"code": 5, "detail": "detail-5", "url": "/url5"},
            {"code": 6, "detail": "detail-6", "url": "/url6"},
            {"code": 7, "detail": "detail-7", "url": "/url7"},
            {"code": 8, "detail": "detail-8", "url": "/url8"}
        ],
        thirdSectionList: [
            {"code": 1, "detail": "detail-1", "url": "/url1"},
            {"code": 2, "detail": "detail-2", "url": "/url2"},
            {"code": 3, "detail": "detail-3", "url": "/url3"},
            {"code": 4, "detail": "detail-4", "url": "/url4"},
            {"code": 5, "detail": "detail-5", "url": "/url5"},
            {"code": 6, "detail": "detail-6", "url": "/url6"},
            {"code": 7, "detail": "detail-7", "url": "/url7"},
            {"code": 8, "detail": "detail-8", "url": "/url8"}
        ]
    }
};