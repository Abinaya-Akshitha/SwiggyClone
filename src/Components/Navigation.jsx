import React from "react";


function Navigation(){
    return(
        <div>
            <nav className="nav">
                <ul className="nav-left">
                    <li><a className="link" href="/">
                    <img className="logo" src="/images/logo.jpg"/></a>
                    </li>
                    <li className="item"><a className="link">Other</a></li>
                    <li className="item"><img src="/images/down-arrow.png" alt="arrow"/></li>

                </ul>
               
            </nav>
        </div>
    );
}
export default Navigation