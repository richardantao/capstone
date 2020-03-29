import React from "react";
import Helmet from "react-helmet";

import Nav from '../../../components/organisms/Nav/';


export default ({  }) => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Home</title>
            </Helmet>
            <Nav/>
            <main role="main">
            <p>Welcome Home</p>
            </main>
        </>
    );
};