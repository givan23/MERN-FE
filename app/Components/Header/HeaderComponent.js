import React from "react";

export const HeaderComponent = ({}) => {

    return <div className="header">
        <div className="header-container">

            <div className="header-login-container">
                <AccessComponent/>
                <SignInComponent/>
            </div>

            <RowComponent/>


            <div className="header-nav-bar-container">
                <div className="header-nav-bar-left">
                    <div className="header-nav-item">HOME</div>
                    <div className="header-nav-item">ABOUT US</div>
                </div>
                <div className="header-nav-bar-right">
                    <div className="header-nav-item">SPONSOR</div>
                    <div className="header-nav-item">CONTACT</div>
                </div>
            </div>

        </div>
    </div>
};

const AccessComponent = () => {

    return <div className="header-access">
        <a href={"/access"}>
            <p className="header-text-title">ACCESS</p>
        </a>
    </div>
};

const LogoComponent = () => {

    return <div className="header-logo">
        <img src={"/#"} alt={"/#"}/>
    </div>
};

const SignInComponent = () => {

    return <div className="header-sign-in">
        <a href={"/sign-in"}>
            <p className="header-text-title">SIGN IN</p>
        </a>
    </div>
};

const RowComponent = () => {

    return <div className="header-row">
        <LogoComponent/>
    </div>
};









