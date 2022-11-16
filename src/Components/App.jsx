import React from 'react'
import Navbar from './Navbar'
import Shop from './Shop'
import Cart from './Cart'

export default function App() {
  return (
  <>
    <Navbar/>
    <diV className="container-fluid mt-1">
    <diV className="row">
    <div className="col-9">
        <Shop/>
    </div>
    <div className="col-3">
        <Cart/>
    </div>
   </diV>
   </diV>
  </>
  )
}















// import React from 'react'
// import Cart from './Cart'
// import Navbar from './Navbar'
// import Shop from './Shop'

// export default function App() {
//     return (
//         <>
//             <Navbar/>
//             <div className='container-fluid mt-1'>
//                 <div className='row'>
//                     <div className='col-9'>
//                         <Shop/>
//                     </div>
//                     <div className='col-3'>
//                         <Cart/>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
