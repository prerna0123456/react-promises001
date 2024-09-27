import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [data, setdata] = useState('');
  
  const [error, seterror] = useState(null);
  
  useEffect(
    ()=>{
      const fetch = new Promise(
        (resolve,reject) =>{
          setTimeout(() => {
            resolve ("Command accepted")
          }, 3000);
        }
      );
      fetch.then(
        (result)=>{
          setdata(result)
        }).catch(
          (err)=>{
            seterror(err)
          }
        )
      
    }
  )
  

  return (

    <div className="App">
      <h2>Promise inside useEffect</h2>
      {error?<div>Error: {error} </div>: data? data:<div>Loading...</div>}
    </div>
  );
}

export default App;
