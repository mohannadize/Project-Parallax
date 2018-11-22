// Vibrant = require("node-vibrant");
// import Vibrant from "node-vibrant";
import gallery from "./gallery";
import Parallax from "parallax-js";

let arts = Object.keys(gallery);
console.log(gallery)

let elts = [];
arts.map(name=>{
    let artist = gallery[name].artist;
    let dir = name;
    let imgs = gallery[name].layers;
    // let color = new Vibrant(`images/${dir}/${imgs[0]}`);
    let gallerytag = document.getElementById("gallery");
    let container = document.createElement("div");

    let title = document.createElement("h3");
    title.innerText = name.split("_").join(" ");

    let desc = document.createElement("p");
    desc.innerText = artist;

    let parallaxCont = document.createElement("div")
    parallaxCont.id = dir;
    parallaxCont.classList.add("parallax");

    let counter = 0;
    imgs = imgs.map(x=>{
        counter++;
        let img = document.createElement("img");
        img.alt = "Unable to load image";
        img.dataset.depth = counter/5;
        img.src = `http://testshortny.epizy.com/cdn/${dir}/${x}`;
        return img;
    })
    imgs.map(x=>{
        parallaxCont.append(x);
    })

    let a = document.createElement("a");
    a.href = gallery[name].link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerText = "More info"

    container.append(title,desc,parallaxCont,a);
    gallerytag.append(container);

    new Parallax(parallaxCont,{
        relativeInput:true,
        hoverOnly:true,
        limitY: 4,
        limitX: 10
    });
})
