import Navbar2 from "./navbar2";
function Admin(){
    return(
        <div style={{backgroundColor:"rgba(1, 0, 0, 0.4)"}}>
        <Navbar2 />
        
        <div>
            <h1 style={{marginLeft:"40%",marginTop:"5%"}}>Admin page</h1>
            <img src="amin.png" style={{width:"20%",marginLeft:"40%"}}></img>
        </div>
        </div>
    );
}
export default Admin;