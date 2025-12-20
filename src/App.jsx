
import { Cars } from "./Cars";





function App(){
  const [honda, tesla] = Cars;

  const {
    speedStats: {
      HondatopSpeed: hondaTopSpeed
    },
    coloursByPopularity: [hondaTopColour]
  } = honda;

  const {
    speedStats: {
      TeslatopSpeed: teslaTopSpeed
    },
    coloursByPopularity: [teslaTopColour]
  } = tesla;
 

  return(



    
    <table>

     <tr>
      <th className="heading">Brand</th>
      <th className="heading">Top Speed</th>
      <th className="heading">Top Color</th>
     </tr>

    <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
    </tr>

     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td>
       <td>{hondaTopColour}</td>
     </tr>

   </table>
   


  )
}

export default App;



/*function App() {
  const currentTime = new Date().toLocaleTimeString();

  const [time, setTime] = useState(currentTime);

  const updateTime = () =>{
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
    setInterval(updateTime, 1000);
  }


  
 

  return (
    <>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Time</button>
      
    </>
  )
}

export default App 

const [count, setCount] = useState(0)

  const decrease = () =>{
    setCount(count - 1);
  }

  const increase = () =>{
    setCount(count + 1);
  }

  return (
    <>
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
      
    </>
  ) */