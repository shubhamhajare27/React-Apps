import { useState } from "react";

function App() {
  //let firstname='shubham';
  // let lastname='hajare';
  const[firstname,setFirstName]=useState('');


  return (
    <div>
      <h1>Hello</h1>
      <label>firstname</label>
      <input
        type="text"
        value={firstname}
        onChange={(e)=>setFirstName(e.target.value)}
      />
      <h2>{firstname  }</h2>
      {/* <h2>lastname is {lastname}</h2> */}
      <br/>
      {/* <button onClick={handleClick}>Click me</button> */}
    </div>
  );
}

export default App;
