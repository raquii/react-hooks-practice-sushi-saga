import React from "react";

function Sushi({id, name, img, price, eaten, onEaten}) {
  
  return (
    <div className="sushi">
      <div className="plate" onClick={()=> onEaten(id, price)}>
        
        {eaten ? null : (
          <img
            src={img}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
