import {HorseRacerManagers} from "../Core/Logic/HorseRacerManagers";
import {CentralContentManagers} from "../Core/Logic/CentralContentManagers";


const managers = [
    ...HorseRacerManagers,
    ...CentralContentManagers,
    //%InsertManager%
];

export default managers;