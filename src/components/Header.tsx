import { useState } from 'react';
import Modal from './Modal';
import { useCardSelectorHook } from '../store/hooks';

export default function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const cardQuantity = useCardSelectorHook((state)=>state.card.items.reduce((val,item)=>val + item.quantity, 0))

  function handleOpenCartClick() {
    setCartIsVisible(true);
  }

  function handleCloseCartClick() {
    setCartIsVisible(false);
  }

  return (
    <>
      {cartIsVisible && <Modal onClose={handleCloseCartClick} />}
      <header id="main-header">
        <div id="main-title">
          <img src="logo.png" alt="Elegant model" />
          <h1>Elegant Redux</h1>
        </div>
        <p>
          <button onClick={handleOpenCartClick}>Cart {cardQuantity}</button>
        </p>
      </header>
    </>
  );
}
