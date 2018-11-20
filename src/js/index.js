let Vibrant = require("node-vibrant");

let arts = Object.keys(gallery);

arts.map(name=>{
    let counter = 0;
    let artist = gallery[name].artist;
    let dir = name;
    let imgs = gallery[name].layers;
    // let color = new Vibrant(`images/${dir}/${imgs[0]}`);


})


// class Gallery extends React.Component {
//     render() {
//         let haha = keys.map((name)=>{
//             let counter = 0;
//             let artist = gallery[name].artist;
//             let dir = name;
//             let imgs = gallery[name].layers;
//             let color = new Vibrant(`images/${dir}/${imgs[0]}`);
//             color.getPalette().then(x=>{
//                 let elem = document.querySelector("#"+dir);
//                 elem.style.borderColor = x.DarkMuted ? x.DarkMuted.getHex() : "#222";
//             });
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
