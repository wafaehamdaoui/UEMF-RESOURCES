import React from "react";
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar2() {
  async function handleLogout() {
    await fetch(`http://localhost:5000/logout`, {
      method: "post"
    });
  }
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/admin">
       <img style={{"width" : 80 + '%'}} src="logo.png" alt=""></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav mr-auto">
           <li className="nav-item ">
           <NavLink className="nav-link" to="/admin">
               Acceuil 
             </NavLink>
           </li>
           <li className="nav-item ">
             <NavLink className="nav-link" to="/admin/register">
                Créer Utilisateur
             </NavLink>
           </li>
           <li className="nav-item ">
             <NavLink className="nav-link" to="/admin/record">
                Liste Demandes
             </NavLink>
           </li>
           <li className="nav-item ">
             <NavLink className="nav-link" to="/admin/user">
                 Liste Utilisateurs 
             </NavLink>
           </li>
           <li className="nav-item ">
             <NavLink className="nav-link" to="/">
               Se déconnecter
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}
