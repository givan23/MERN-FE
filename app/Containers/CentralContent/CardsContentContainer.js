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

const getCentralContent = (state) => state.centralContentReducers.centralContent;
const getScreenSize = (state) => state.centralContentReducers.screenSize;


const mapStateToProps = createSelector (
    [getCentralContent, getScreenSize],
    (centralContent, screenSize) => {
        const { cardList = [], cardStatic = {} } = centralContent;

        return {
            cardList: giveMeClass(cardList, screenSize),
            cardStatic
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        initCentralContent : () => dispatch(initCentralContent())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CentralContent);