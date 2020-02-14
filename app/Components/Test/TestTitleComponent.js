import React from "react";

export const TitleTestComponent = ({testProps, isTrue}) => {

    return isTrue ? <p>{testProps}</p> : null;
};