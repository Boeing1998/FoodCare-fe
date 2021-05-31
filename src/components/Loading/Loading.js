import React from "react";
import { css } from "@emotion/core";
import PacmanLoader from "react-spinners/PacmanLoader";

const Loading = (props) => {
    const override = css`
        display: block;
        margin: 0 auto;
        border-color: red;`;
    return (
        <PacmanLoader color={"#36D7B7"} loading={props.loading} css={override} size={20} />
    );
};

export default Loading;