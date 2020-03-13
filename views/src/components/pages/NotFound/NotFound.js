import React from "react";

import "./NotFound.scss";

import Helmet from "react-helmet";

import AuthNav from '../../../components/organisms/AuthNav/';


const NotFound = () => {

    
    return (
        <>
            <Helmet>
                <title>Resource Not Found</title>
            </Helmet>
            <AuthNav/>
            <main role="main">
                
            </main>
        </>  
    );
};

export default NotFound;