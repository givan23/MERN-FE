import React from 'react';
import {DOWN, UP} from "../../Core/Costants/HorseRacerConstants";



class HorseRacerOdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oddState: null
        }
    }


    componentDidUpdate(prevProps, prevState) {
        prevProps.odd < this.props.odd ?
            this.setState({oddState: UP}) : prevProps.odd > this.props.odd ?
            this.setState({oddState: DOWN}) : null;

    }

    render() {
        const oddState = this.state.oddState;
        const oddValue = this.props.odd;

        return <div className={"horse-odd " + oddState}>{oddValue}</div>
    }
}

export default HorseRacerOdd;


