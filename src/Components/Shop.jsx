import React from 'react'
import p from "../assets/images/p.jpg"

import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../State/index'

export default function Shop() {
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreators,dispatch)
    return (
        <div className="card col-3">
            <img src={p} className="card-img-top" alt="..." width="100%" height="200px"/>
                <div className="card-body">
                    <h5 className="card-title">Man Jeans Black Adidas</h5>
                    <p className="card-text">Price &#8377;<del>7899</del> 899</p>
                    <a href="#" className="btn btn-primary w-100 btn-sm mb-1" onClick={()=>action.addToCart(1)}>Add to Cart</a>
                    <a href="#" className="btn btn-primary w-100 btn-sm" onClick={()=>action.removeFromCart(1)}>Remove From Cart</a>
                </div>
        </div>
    )
}
