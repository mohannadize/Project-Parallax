import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Parallax from "parallax-js";
import gallery from './gallery';
import * as Vibrant from 'node-vibrant';

function Intro() {
    return (<div>
        <h1>The Parallax Gallery Project</h1>
        <p>Welcome to the parallax Gallery Project.</p>
        <p>
            This Project aims to extend the experience of art by intruducing a new 3d interactive dimension.
            The Photos are edited using photoshop into depth layers then with the help of <a rel="noopener noreferrer" target="_blank" href="https://github.com/wagerfield/parallax">Parallax.js</a>, we can take benifit of these layers.
        </p>
    </div>)
}
let keys = Object.keys(gallery);
class Gallery extends React.Component {
    render() {
        let counter = 0;
        let haha = keys.map(name=>{
            let artist = gallery[name].artist;
            let dir = name.split(" ").join("");
            let imgs = gallery[name].layers;
            let color = new Vibrant(`images/${dir}/base.png`);
            color.getPalette().then(x=>{
                let elem = document.querySelector("#"+dir);
                elem.style.borderColor = x.DarkMuted.getHex();
            });
            return (
                <div key={counter.toString()}>
                    <h3>{name}</h3>
                    <p>{artist}</p>
                    <div className="parallax" key={dir} id={dir} >
                        {imgs.map(x=>{
                            counter++;
                            return (<img alt="An error has occured"
                                        key={counter.toString()}
                                        data-depth={counter / 10}
                                        src={"images/"+dir+"/"+x} />)
                        })}
                    </div>
                    <a href={gallery[name].link} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",margin:"10px"}}>Wiki</a>
                </div>
            )
        });
        return (haha)
    }
}
//
function Page() {
    return (<div>
        <Intro />
        <br/>
        <Gallery />
    </div>)
}
// ========================================

ReactDOM.render(
    <Page />,
    document.getElementById('root')
);
for (let name of keys) {
    let dir = name.split(" ").join("");
    const scene = document.getElementById(dir);
    // eslint-disable-next-line
    new Parallax(scene,{
        relativeInput:true,
        hoverOnly:true,
        limitY: 0
    });    
}
