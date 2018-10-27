import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Parallax from "parallax-js";

function Intro() {
    return (<div>
        <h1>The Parallax Gallery Project</h1>
        <p>Welcome to the parallax Gallery Project.</p>
        <p>
            This Project aims to extend the experience of art by intruducing a new 3d interactive dimention.
            The Photos are edited using photoshop into depth layers then with the help of <a rel="noopener noreferrer" target="_blank" href="https://github.com/wagerfield/parallax">Parallax.js</a>, we can take benifit of these layers.
        </p>
    </div>)
}
class Content extends React.Component {
    render() {
        return (<div id="scene" style={{overflow:"hidden",margin:"auto"}}>
            <img data-depth="0.2" src="images/base.png" alt="failed to load"/>
            <img data-depth="0.4" src="images/top.png" alt="failed to load"/>
        </div>)
    }
}

function Page() {
    return (<div>
        <Intro />
        <Content />
    </div>)
}
// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
const scene = document.getElementById("scene");
// eslint-disable-next-line
const parallaxinstance = new Parallax(scene,{
    relativeInput:true,
    hoverOnly:true
});