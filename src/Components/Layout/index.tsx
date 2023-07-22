import {Outlet, Navigate} from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";



const Layout = () => {
    const isLoggedIn = true;

    if (!isLoggedIn) {return <Navigate to = {"/login"}/>}

    return (  
        <div>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    );
}
 
export default Layout;