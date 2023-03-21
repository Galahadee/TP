import { useDispatch, useSelector } from "react-redux";
import { increment } from "./store/counterSlice";
import { useEffect } from "react";

import './App.css'


function App() {
  const dispatch = useDispatch();
  const { number, active } = useSelector( state => state );

  // useEffect(()=>{
  //   dispatch(increment(0));
  // })


  return (
    <div className="App">
      <div className="card">
        <p>{number}</p>
        <button disabled={!active} onClick={() => dispatch(increment(1))}>INCREMENT</button>
      </div>
    </div>
  )
}

export default App
