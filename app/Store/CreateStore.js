import {combineReducers, createStore} from 'redux';
import {createLogicMiddleware} from "redux-logic";
import axios from "axios";
import reducers from "./Reducers";
import managers from "./Managers";
import {createEnhancer} from "../Utils/CreateStoreUtils";


//REDUCERS
const rootReducer = combineReducers(reducers);

//MIDDELWARE
const dependencies = { httpClient: axios };
const logicMiddleware = createLogicMiddleware(managers, dependencies);
const enhancer = createEnhancer(logicMiddleware);

//CREATE STORE
const store = createStore(rootReducer, enhancer);

export default store;
