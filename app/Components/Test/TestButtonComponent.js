import React from "react";

export const ButtonTestComponent = ({testAction}) => {
    return (
        <>
        <button onClick={testAction}>{"PUSH"}</button>
    </>
    );
};
