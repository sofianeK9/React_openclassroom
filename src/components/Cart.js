import React from 'react'
import '../components/styles/Cart.css'

const Cart = () => {

    const Monstera = 8;
    const Lierre = 10;
    const Fleurs = 15;
  return (
    <div className='lmj-cart'>
        <h2>Pannier</h2>
        <ul>
            <li>Monstera : {Monstera}€</li>
            <li>Lierre : {Lierre}€</li>
            <li>Fleurs : {Fleurs} €</li>
        </ul>
        <p>Total : {Monstera + Lierre + Fleurs} € </p>
    </div>
  )
}

export default Cart