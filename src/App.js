import {useState} from "react";
import logo from './logo.svg';
import './App.css';
import Boxes from "./Boxes.js";
function App() {
  var i;
 var arr=[];
 const a= function(){
    for(var i=0;i<12;i++){
      arr.push( <Boxes key={i} />)
    }
    return arr;
  }
  return(
        <React.Fragement>
        <h1 style={{textAlign:"center",color:"white",fontSize:"40px"}}>Color Boxes</h1>
          <div className="conatiner">
        <div className="grid-container">
          {a()}
      </div>
    </div>
    
      </React.Fragement>
  )
}


export default App;
