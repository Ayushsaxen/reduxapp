import React, { startTransition } from 'react'
import { useSelector } from 'react-redux'
export default function Cart() {
  var cart = useSelector((state)=>state.cart)
  return (
    <div className='container-fluild'>
      {
        cart!==0?
        <table className='table'>
        <tbody>
          <tr>
            <th>Item</th>
            <td>Man Jeans Black Adidas</td>
          </tr>
          <tr>
            <th>Price</th>
            <td>&#8377;899</td>
          </tr>
          <tr>
            <th>Qty</th>
            <td>{cart}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>&#8377;{cart*899}</td>
          </tr>
          <tr>
            <td colSpan={2}><button className='btn w-100 bg-primary text-light btn-sm'>Checkout</button></td>
          </tr>
        </tbody>
      </table>:
      <p>No Item In Cart</p>
      }
    </div>
  )
}
