import React from "react";
import {RowListComponent} from "./RowListComponent";

class TimetableContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            indexNew: -1,
            show: false,

        };
    }

    render() {
        const onShowPopap = (index) => {
            this.setState({
                indexNew: index,
                show: !this.state.show
            });
        };

        const onClearAllPopap = () => {

            // this.setState({
            //     show: this.state.clear ? null : false
            // });


        };

        return (
            <RowListComponent indexNew={this.state.indexNew} onClearAllPopap={onClearAllPopap} onShowPopap={onShowPopap} show={this.state.show}/>
        )
    }
}

export default TimetableContainer

