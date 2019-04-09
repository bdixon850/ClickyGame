import React, { Component } from "react";
import "./style.css";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Test Your Memory</span>
                <span className="navbar-brand mb-0 h1">Score: { this.props.score }</span>
                <span className="navbar-brand mb-0 h1">High Score: { this.props.highScore }</span>
            </nav>
        );
    }
};

export default Nav;