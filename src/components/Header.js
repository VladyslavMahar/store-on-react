import { FaShoppingBag } from "react-icons/fa";
import Order from "./Order";

const showOrders = (props) => {
  let summa = 0
  props.orders.forEach(el => summa += Number.parseFloat(el.price)*el.count)
  return (<div>
    {props.orders.map(el=> (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
      <p className="summa">Сума покупок: <span>{new Intl.NumberFormat().format(summa)}$</span> </p>
      <button onClick={props.cleanCart} className='clean-cart'>Очистити кошик</button>
  </div>)
}

const showNothing = (props) => {
  return (<div className="empty">
    <h4>Корзина порожня</h4>
  </div>)
}

export default function Header(props) {

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className='nav'>
              <li>Про нас</li>
              <li>Контакти</li>
              <li>Кабінет користувача</li>
            </ul>
            <span className="cart-icon">
              <b>({props.orders.length})</b>
              <FaShoppingBag onClick={props.setCartOpen} className={`shop-cart-btn ${props.cartOpen && 'active'}`} />
              
              </span>
            {props.cartOpen && (
              <div className='shop-cart'>
                  {props.orders.length > 0 ?
                    showOrders(props) : showNothing()}
                </div>
            )}
        
        </div>
        <div className='presentation'></div>
    </header>
  )
}
