import React from "react";


export const HeaderComponent = ({headerItem = {}, navBarItems = {}}) => {

    return <div className="header">
        <div className="header-container">
            <div className="header-login-container">
                <HeaderItemComponent headerItem={headerItem}/>
            </div>
            <div className="header-row"/>
            <NavBarComponent navBarItems={navBarItems}/>
        </div>
    </div>
};

const HeaderItemComponent = ({headerItem}) => {
    const {access = {}, singIn = {}} = headerItem;

    return <>
             <div className="header-access">
                 <a href={access.url || ""}>
                     <p className="header-text-title">{access.name || ""}</p>
                 </a>
             </div>
             <div className="header-sign-in">
                 <a href={singIn.url || ""}>
                     <p className="header-text-title">{singIn.name || ""}</p>
                 </a>
             </div>
          </>
};

const NavBarComponent = ({navBarItems}) => {
    const {home={},aboutUs={},logo={},sponsor={},contactUs={}} = navBarItems;

    return <nav className="header-nav-bar-container">
        <a href={home.url || ""} className="header-nav-item">{home.name || ""}</a>
        <a href={aboutUs.url || ""} className="header-nav-item">{aboutUs.name || ""}</a>
        <div className="header-logo-container">
            <img src={logo.url || ""} alt={"/#"} className="header-logo"/>
        </div>
        <a href={sponsor.url || ""} className="header-nav-item">{sponsor.name || ""}</a>
        <a href={contactUs.url || ""} className="header-nav-item">{contactUs.name || ""}</a>
    </nav>
};













