import { CardItem, addToCard, removeFromCard } from "../store/card-slice";
import { useCardDispatchHook, useCardSelectorHook } from "../store/hooks";

export default function CartItems() {
  const cartItems = useCardSelectorHook((state)=> state.card.items)

  const totalPrice = useCardSelectorHook(state=>state.card.items.reduce((val,item)=>val + item.price*item.quantity, 0))
  const formattedTotalPrice = totalPrice.toFixed(2)

  const dispatch = useCardDispatchHook()
  const handleRemoveFromCart = (id: string)=>{
   dispatch(removeFromCard(id))
  }

  const handleAddToCart = (item: CardItem)=>{
    dispatch(addToCard(item))
  }

  return (
    <div id="cart">
      {cartItems.length == 0 &&<p>No items in cart!</p>}

      <ul id="cart-items">
          {cartItems.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart(item.id)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
