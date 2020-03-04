import createReducer from "../../Utils/CreateReducerUtils"


const initState = {
    channelId: 0,
    disciplineCode: 0,
    disciplineDescription: "Galoppo",
    eventDescription: "Campionato del mondo di ippica",
    subscribeDate: "22/01/2020",
    winningRacerName: {betDescription:"Vincente"},
    placeTwoRacerName: {betDescription:"Piazzato su 2"},
    placeThreeRacerName: {betDescription:"Piazzato su 3"},
    odds: [300,300,300,300,300,300],
};

const storedRaceClick = (draft, action) => {

    draft.channelId = action.response.channelId;
    draft.disciplineCode = action.response.disciplineCode;
    draft.disciplineDescription = action.response.disciplineDescription;
    draft.eventDescription = action.response.eventDescription;
    draft.subscribeDate = action.response.subscribeDate;
    draft.winningRacerName = action.response.winningRacerName;
    draft.placeTwoRacerName = action.response.placeTwoRacerName;
    draft.placeThreeRacerName = action.response.placeThreeRacerName;
};

const onRandomInterval = (draft, action) => {
    draft.odds = action.randomArray;
};


export default createReducer({
    STORED_RACER_CLICK: storedRaceClick,
    ON_RANDOM_INTERVAL: onRandomInterval
}, initState);

