import React ,{useEffect, useState} from "react";
import "./Boxes.css";
export default function Boxes(){
    let allcolor=["purple","magenta","violet","pink"];
    const [color,setColor]=useState();
    const [newColor,setNewColor]=useState();
    useEffect(()=>{
        changeColor();
    });
    function changeColor(){
        let a=Math.floor(Math.random() * allcolor.length);
       setColor(allcolor[a]);

    }
    return(
        <div className="item" style={{backgroundColor:color}} onClick={changeColor}> <span className="text" > <b> Click Me! </b></span></div>
    )

}