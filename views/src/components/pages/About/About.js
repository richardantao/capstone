import React from "react";
import Helmet from "react-helmet";

import { Col, Row } from "reactstrap";

import Nav from "../../organisms/Nav";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="About page describing the app and the authors"/>
                <meta name="keywords" content="Author, Richard, Antao, Jesse, McAllister, Admiro, Ndala, Irfan, Jivraj, Regan, Lam, Wan, Ji, Li"/>
                <title>About Us</title>
            </Helmet>
            <Nav/>
            <main role="main">
                <Row>
                    <Col>
                        <h1>About</h1>
                        <h2>Service</h2>

                        <h2>Team</h2>
                    </Col>
                </Row>
            </main>
        </>
    );
};