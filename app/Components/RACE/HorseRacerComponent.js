import React from 'react';

const HorseRacerComponent = ({
                                 winningRacerName,
                                 winningOdds,
                                 placeTwoRacerName,
                                 placeTwoOdds,
                                 placeThreeRacerName,
                                 placeThreeOdds,
                                 subscribeDate,
                                 disciplineDescription,
                                 onRaceClick
                             }) => {

    console.log("winningRacerName", winningRacerName);
    console.log("winningOdds", winningOdds);
    console.log("placeTwoRacerName", placeTwoRacerName);
    console.log("placeTwoOdds", placeTwoOdds);
    console.log("placeThreeRacerName", placeThreeRacerName);
    console.log("placeThreeOdds", placeThreeOdds);
    console.log("subscribeDate", subscribeDate);
    console.log("disciplineDescription", disciplineDescription);

    return (
        <>
            <button onClick={onRaceClick}>{"SHOW"}</button>
            <br/>
            <p>{"1"}</p>
            <p>{disciplineDescription}</p>


        </>
    );
};
//const TestComponent = React.memo(_HorseRacerComponent, testPropsAreEqual);

export default HorseRacerComponent;