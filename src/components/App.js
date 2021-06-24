import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([]);
  const [balance, setBalance] = useState(100);

  useEffect(()=>{
    fetch(API)
    .then(r=>r.json())
    .then(data=>{
      const updatedSushi = data.map(sushi=> {
        return {...sushi, eaten: false};
      })
      setSushis(updatedSushi);
    });
  }, []);

  function handleEaten(id, price){
    
    if(balance >= price){
      const updatedSushi = sushis.map(sushi=>{
        if(sushi.id === id) return{...sushi, eaten: true};
        return sushi;
      })
      setSushis(updatedSushi);
      setBalance(balance=> balance - price);

    }else{
      alert(`You're broke. Add money to your balance!`)
    }
  }

  const emptyPlates = sushis.filter(sushi=> sushi.eaten);
  
  return (
    <div className="app">
      <SushiContainer sushis={sushis} onEaten={handleEaten} />
      <Table plates={emptyPlates} balance={balance}/>
    </div>
  );
}

export default App;
