import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)

  const itemClass = isInCart ? "Add to Cart" : "Remove From Cart"
  function handleClick(){
    setIsInCart((isInCart) => !isInCart)
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInCart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
