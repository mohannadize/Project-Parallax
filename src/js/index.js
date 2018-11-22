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

    let counter = 0;
    imgs = imgs.map(x=>{
        let img = document.createElement("img");
        img.alt = "Unable to load image";
        img.dataset.depth = counter/5;
        img.src = `images/${dir}/${x}`;
        counter++;
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
//             return (
//                 <div key={dir+counter.toString()}>
//                     <h3>{name.split("_").join(" ")}</h3>
//                     <p>{artist}</p>
//                     <div className="parallax" key={dir} id={dir} >
//                         {imgs.map(x=>{
//                             counter++;
//                             return (<img alt="An error has occured"
//                                         data-depth={counter / 5}
//                                         key={dir+counter.toString()}
//                                         src={"images/"+dir+"/"+x} />)
//                         })}
//                     </div>
//                     <a href={gallery[name].link} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",margin:"10px"}}>More Info</a>
//                 </div>
//             )
//         });
//         return (haha)
//     }
// }
// //
// function Page() {
//     return (<div>
//         <Intro />
//         <br/>
//         <Gallery />
//     </div>)
// }
// // ========================================

// ReactDOM.render(
//     <Page />,
//     document.getElementById('root')
// );
// for (let name of keys) {
//     let dir = name.split(" ").join("");
//     const scene = document.getElementById(dir);
//     // eslint-disable-next-line
//     new Parallax(scene,{
//         relativeInput:true,
//         hoverOnly:true,
//         limitY: 4,
//         limitX: 10
//     });    
// }

//             color.getPalette().then(x=>{
//                 let elem = document.querySelector("#"+dir);
//                 elem.style.borderColor = x.DarkMuted ? x.DarkMuted.getHex() : "#222";
//             });
