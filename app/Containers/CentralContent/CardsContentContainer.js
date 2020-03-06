import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {CardsContentComponent} from "../../Components/CentralContent/CardsContentComponent";
import {initCentralContent} from "../../Core/Actions/CentralContentActions";
import {giveMeClass} from "../../Utils/CentralContentUtils";



class CentralContent extends React.Component {

    componentDidMount() {
        this.props.initCentralContent();
    }

    render(){
        return <CardsContentComponent {...this.props} />
    }
}

const getCardList = (state) => state.centralContentReducers.cardList;
const getScreenSize = (state) => state.centralContentReducers.screenSize;


const mapStateToProps = createSelector(
    [getCardList, getScreenSize],
    (cardList, screenSize) => {

        return {
            cardList: giveMeClass(cardList, screenSize),
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        initCentralContent : () => dispatch(initCentralContent())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CentralContent);