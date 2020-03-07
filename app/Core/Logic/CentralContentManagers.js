import {createLogic} from "redux-logic";
import "babel-polyfill";
import {storedCardList} from "../Actions/CentralContentActions";
import {INIT_CENTRAL_CONTENT} from "../Costants/CentralContentConstants";
import {NETWORK_CALL_ERROR, RESPONSE_CODE_SUCCESS} from "../Costants/NetworkConstants";


const centralContentManager = createLogic({
    type: [INIT_CENTRAL_CONTENT],

    process({action, getState}, dispatch, done) {

        try {

            const data = getDataService();
            if (data.code === RESPONSE_CODE_SUCCESS) {

                dispatch(storedCardList(data.result));

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
                    aboutUs:{
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
                    url: "a"
                },
                cardList: [
                    {
                        url: "a"
                    },
                    {
                        url: "b"
                    },
                    {
                        url: "c"
                    },
                    {
                        url: "d"
                    },
                    {
                        url: "e"
                    },
                    {
                        url: "f"
                    },
                    {
                        url: "g"
                    },
                    {
                        url: "h"
                    },
                    {
                        url: "i"
                    }
                ]
            }
        }
    };
};
