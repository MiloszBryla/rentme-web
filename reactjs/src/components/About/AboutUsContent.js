import React from "react";
import {Link} from "react-router-dom";
import "../../css/header-and-body.css";
import "../../css/about.css";

function AboutUsContent() {
    return (
        <div className="page-content wrapper">
            <div className="main-container">
                <div className="description">
                    <h1>About us</h1>
                    <h3>
                        You can borrow anything from people in your neighbourhood!
                    </h3>
                    <h4>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                        sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default AboutUsContent;










