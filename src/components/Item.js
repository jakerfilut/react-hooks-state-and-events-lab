import React, {useState} from "react";

function Item({ name, category }) {

const [currentAddCart, setAddCart] = useState(false)

function addToCartButton(){
  setAddCart((currentAddCart) => !currentAddCart)

}

  return (
    <li className={currentAddCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCartButton}className="add">
        {currentAddCart ? "Remove from Cart": "Add to Cart"}</button>
    </li>
  );
}

export default Item;











// import React from "react";

// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;
