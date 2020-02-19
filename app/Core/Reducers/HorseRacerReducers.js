import createReducer from "../../Utils/CreateReducerUtils"

const initState = {
    channelId: 0,
    disciplineDescription: "",
    winningPlaceBet: []
};

const storedRaceClick = (draft, action) => {

    draft.channelId = action.response.channelId;
    draft.disciplineDescription = action.response.disciplineDescription;
    draft.winningPlaceBet = action.response.winningPlaceBet;
};

export default createReducer({
    STORED_RACER_CLICK: storedRaceClick
}, initState);