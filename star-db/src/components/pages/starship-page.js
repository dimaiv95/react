import React from "react";
import { withRouter } from "react-router-dom";

import { StarshipList } from "../sw-components"

const StarshipPage = ({ history }) => {

    const onItemSelected = (itemId) => {
        history.push(itemId);
    };

    return(
        <StarshipList onItemSelected={ onItemSelected } />
    );

}

export default withRouter(StarshipPage);