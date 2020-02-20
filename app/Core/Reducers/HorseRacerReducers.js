import createReducer from "../../Utils/CreateReducerUtils"

const initState = {
    winningRacerName: [],
    winningOdds: [],
    placeTwoRacerName: [],
    placeTwoOdds:[],
    placeThreeRacerName:[],
    placeThreeOdds:[],
    subscribeDate: "",
    disciplineDescription: "",
};

const storedRaceClick = (draft, action) => {

    draft.winningRacerName = action.response.winningRacerName;
    draft.winningOdds = action.response.winningOdds;
    draft.placeTwoRacerName = action.response.placeTwoRacerName;
    draft.placeTwoOdds = action.response.placeTwoOdds;
    draft.placeThreeRacerName = action.response.placeThreeRacerName;
    draft.placeThreeOdds = action.response.placeThreeOdds;
    draft.subscribeDate = action.response.subscribeDate;
    draft.disciplineDescription = action.response.disciplineDescription;
};

export default createReducer({
    STORED_RACER_CLICK: storedRaceClick
}, initState);