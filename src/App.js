import { useState } from "react";
import InputBox from "./InputBox";
import Model from "./Model";


function App() {
  const [model,setModel] = useState(false)
  return (
    <div className="bg-background-img bg-cover h-screen">
      { model ?  <Model setModel={setModel}/> : <InputBox model={model} setModel ={setModel}/> }
     
    </div>
  );
}

export default App;
