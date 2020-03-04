import React from 'react'
import {connect} from "react-redux";
import {createSelector} from "reselect";
import {CentralContentComponent} from "../../Components/CentralContent/CentralContentComponent";
import {initCentralContent} from "../../Core/Actions/CentralContentActions";



class CentralContent extends React.Component {

    componentDidMount() {
        this.props.initCentralContent();
    }

    render(){
        return <CentralContentComponent {...this.props} />
    }
}

const getAliasUrlList = (state) => state.centralContentReducers.aliasUrlList;
const getScreenSize = (state) => state.centralContentReducers.screenSize;


const mapStateToProps = createSelector(
    [getAliasUrlList, getScreenSize],
    (aliasUrlList, screenSize) => {

        return {
            aliasUrlList,
            screenSize
        };
    }
);

const mapDispatchToProps = (dispatch) => {
    return {
        initCentralContent : () => dispatch(initCentralContent())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CentralContent);