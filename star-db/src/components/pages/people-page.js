import React from "react";
import { withRouter } from "react-router-dom";

import { PersonList, PersonDetails } from "../sw-components"

import Row from "../row";

const PeoplePage = ({ history, match }) => {

    const { id } = match.params;
    return (
        <Row
            left={<PersonList onItemSelected={ ( itemId ) => history.push(itemId) } ></PersonList>}
            right={<PersonDetails itemId={ id } />}
        />
    );

}

export default withRouter(PeoplePage);