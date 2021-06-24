import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, onEaten}) {
  const [index, setIndex] = useState(0);

  function handleMoreClick(){
    setIndex(index=> (index+4) % sushis.length);
  }

  const sushiCards = sushis.slice(index, index + 4).map(sushi=> {
      return <Sushi 
        key={sushi.id}
        id={sushi.id}
        name={sushi.name}
        img={sushi.img_url}
        price={sushi.price}
        eaten={sushi.eaten}
        onEaten={onEaten}
      />
    })
  

  return (
    <div className="belt">
      {sushiCards}
      <MoreButton onMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
