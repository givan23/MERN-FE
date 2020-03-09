import {createLogic} from "redux-logic";
import "babel-polyfill";
import {storedCardList} from "../Actions/CentralContentActions";
import {INIT_CENTRAL_CONTENT, ON_DETAIL_CARD} from "../Costants/CentralContentConstants";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../Costants/NetworkConstants";
import {selectCardList} from "../../Utils/CentralContentUtils";


const centralContentManager = createLogic({
    type: [INIT_CENTRAL_CONTENT, ON_DETAIL_CARD],

    process({action, getState}, dispatch, done) {

        try {

            const data = getDataService();
            if (data.code === RESPONSE_CODE_SUCCESS) {

                const dataNew = selectCardList(data, action.code || "homeDetail");

                dispatch(storedCardList(dataNew));

            } else {
                console.log(NETWORK_CALL_ERROR);
            }

        } catch (error) {
            console.log(NETWORK_CALL_ERROR, error);
        }

        done();
    }
});

export const CentralContentManagers = [centralContentManager];

const getDataService = () => {
    return {
        code: 1,
        result: {
            headerContent: {
                headerItem: {
                    access: {
                        name: "ACCESS",
                        url: "/access"
                    },
                    singIn: {
                        name: "SIGN IN",
                        url: "/sign-in"
                    },
                },
                navBarItems: {
                    home: {
                        name: "HOME",
                        url: "/home"
                    },
                    aboutUs: {
                        name: "ABOUT US",
                        url: "/about-us"
                    },
                    logo: {
                        url: "/sponsor"
                    },
                    sponsor: {
                        name: "SPONSOR",
                        url: "/sponsor"
                    },
                    contactUs: {
                        name: "CONTACT US",
                        url: "/contact-us"
                    }
                },
            },
            centralContent: {
                cardStatic: {
                    path: "/cover/static-pic",
                },
                //HOME
                homeDetail: {
                    cardList: [
                        {
                            path: "/cover/room",
                            code: "roomDetail"
                        },
                        {
                            path: "/cover/breakfast",
                            code: "breakfastDetail"
                        },
                        {
                            path: "c",
                            code: "c"
                        },
                        {
                            path: "d",
                            code: "d"
                        },
                        {
                            path: "e",
                            code: "e"
                        },
                        {
                            path: "f",
                            code: "f"
                        },
                        {
                            path: "g",
                            code: "g"
                        },
                        {
                            path: "h",
                            code: "h"
                        },
                        {
                            path: "i",
                            code: "i"
                        }
                    ]
                },
                //ROOM
                roomDetail: {
                    cardList: [
                        {
                            path: "/room/pic1",
                            code: null
                        },
                        {
                            path: "/room/pic2",
                            code: null
                        },
                        {
                            path: "/room/pic3",
                            code: null
                        },
                        {
                            path: "/room/pic4",
                            code: null
                        },
                        {
                            path: "/room/pic5",
                            code: null
                        },
                        {
                            path: "/room/pic6",
                            code: null
                        },
                        {
                            path: "/room/pic7",
                            code: null
                        },
                        {
                            path: "i/room/pic8",
                            code: "homeDetail"
                        }
                    ]
                },
                //BREAKFAST
                breakfastDetail: {
                    cardList: [
                        {
                            path: "/breakfast/pic1",
                            code: null
                        },
                        {
                            path: "/breakfast/pic2",
                            code: null
                        },
                        {
                            path: "/breakfast/pic3",
                            code: null
                        },
                        {
                            path: "/breakfast/pic4",
                            code: null
                        },
                        {
                            path: "/breakfast/pic5",
                            code: null
                        },
                        {
                            path: "/breakfast/pic6",
                            code: null
                        },
                        {
                            path: "/breakfast/pic7",
                            code: null
                        },
                        {
                            path: "i/breakfast/pic8",
                            code: "homeDetail"
                        }
                    ]
                },

            }
        }
    };
};