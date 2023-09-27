import React from "react";

const NotfoundPage: React.FC = () => {
    return(
        <div>
            <h1>404</h1>
            <h1>Page not found</h1>
            <a href="/home">
                <button id="backToHomeButton">Home Page</button>
            </a>
        </div>
    );
}
export default NotfoundPage;