import React, { useState, useRef, useEffect } from "react";

import "./App.css";

// FIRST USE OF "useref" //

// function App() {
//   const [name, setName] = useState("");
//   const count = useRef(1);
//   const onChangeHandler = (e) => {
//     setName(e.target.value);
//   };

//   useEffect(() => {
//     count.current = count.current + 1;
//   });

//   return (
//     <div className="App">
//       <input value={name} placeholder="name" onChange={onChangeHandler}></input>
//       <p>My name is {name}</p>
//       <p>The component is rendered {count.current} times</p>
//     </div>
//   );
// }

// SECOND USE OF "useref" ,change focus

// function App() {
//   const [name, setName] = useState("");
//   const [display, setDisplay] = useState("");
//   const inputRef = useRef();

//   const focus = () => {
//     inputRef.current.focus();
//   };

//   const submit = () => {
//     setDisplay(`${name}`);
//   };

//   return (
//     <div>
//       <input
//         ref={inputRef}
//         placeholder="name"
//         onChange={(e) => setName(e.target.value)}
//       ></input>
//       <p>My name is {display}</p>
//       <button onClick={focus}>Focus</button>
//       <button onClick={submit}>Submit</button>
//     </div>
//   );
// }

// THIRD USE: store previous value

function App() {
  const [name, setName] = useState("");
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current = name;
  }, [name]);

  return (
    <div>
      <input
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <p>
        My name is {name} and it used to be {inputRef.current}
      </p>
    </div>
  );
}

export default App;
