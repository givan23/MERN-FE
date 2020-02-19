import React from 'react';

const HorseRacerComponent = ({channelId, disciplineDescription, winningPlaceBet, onRaceClick}) => {

        console.log("winningPlaceBet", winningPlaceBet);
    return (
        <>  <button onClick={onRaceClick}>{"SHOW"}</button>
            <br/>
            <p>{channelId}</p>
            <p>{disciplineDescription}</p>


        </>
    );
};
//const TestComponent = React.memo(_HorseRacerComponent, testPropsAreEqual);

export default HorseRacerComponent;