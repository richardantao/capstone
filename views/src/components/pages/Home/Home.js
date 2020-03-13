import React from "react";
import Helmet from "react-helmet";

import AuthNav from '../../../components/organisms/AuthNav/';


export default ({  }) => {
    return (
        <>
            <Helmet>
                <meta name="description" content=""/>
                <meta name="keywords" content=""/>
                <title>Home</title>
            </Helmet>
            <AuthNav/>
            <main role="main">
            <p>Welcome Home</p>
            </main>
        </>
    );
};