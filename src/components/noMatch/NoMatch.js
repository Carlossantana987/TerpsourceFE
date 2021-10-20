import React from 'react';
import {Link} from "react-router-dom";
import '../noMatch/noMatch.scss';


const NoMatch = () => {
    return(
        <div className="nomatchContainer">
        <section>
            <h1>404 :(</h1>
            <h2>Page Not Found or Does Not Exist</h2>
            <Link to='/'> RETURN TO HOME PAGE </Link>
            </section>
        </div>
    )
}

export default NoMatch;