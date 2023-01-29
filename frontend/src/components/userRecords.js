import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
const Record = (props) => (
 <tr>
   <td>{props.record._id}</td>
   <td>{props.record.matricul}</td>
   <td>{props.record.nom}</td>
   <td>{props.record.prenom}</td>
   <td>{props.record.ecole}</td>
   <td>{props.record.ressource}</td>
   <td>{props.record.duree}</td>
   <td>{props.record.date}</td>
   <td>{props.record.status}</td>
   <td>
     <Link className="btn btn-link" to={`/student/edit/${props.record._id}`}>Editer</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >
       Annuler
     </button>
   </td>
 </tr>
);
 
export default function UserRecord() {
 const [records, setRecords] = useState([]);
 const navigate = useNavigate();
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/userRecord/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       navigate("/");
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3 style={{marginTop:"1.5%" , marginLeft:"37%"}}>Mes Demandes
         <Link to={"/student"} style={{marginLeft:"65%",fontSize:"20px"}}>Acceuil </Link>
     </h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
         <th>Id_Demande</th>
           <th>Matricul</th>
           <th>Nom</th>
           <th>Prénom</th>
           <th>Ecole</th>
           <th>Ressource</th>
           <th>Durée</th>
           <th>Date</th>
           <th>Statut</th>
           <th>Actions</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}
