import React from 'react'
import { useSelector } from 'react-redux'

export default function Navbar() {
    var cart =useSelector((state)=>state.cart)
  return (
    <>
         <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">ReduxApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-primary">
                                    Cart <span className="badge text-bg-secondary">{cart}</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    </>
  )
}
















// import React from 'react'

// import { useSelector } from 'react-redux'
// export default function Navbar() {
//     var cart = useSelector((state)=>state.cart)
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-primary">
//                 <div className="container-fluid">
//                     <a className="navbar-brand text-light" href="#">ReduxApp</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                                 <a className="nav-link text-light active" aria-current="page" href="#">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <button type="button" className="btn btn-primary">
//                                     Cart <span className="badge text-bg-secondary">{cart}</span>
//                                 </button>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }
