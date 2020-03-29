import React from "react";
import Helmet from "react-helmet";

import Nav from "../../../components/organisms/Nav/";

import "./NotFound.scss";

export default () => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Page Not Found</title>
            </Helmet>
            <Nav/>
            <main role="main">
                
            </main>
        </>  
    );
};