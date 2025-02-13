import { Route } from "react-router-dom";
import { Searchbar } from "./Searchbar";
import { Outlet } from "react-router-dom";
function Layout(){
    <>
    <Searchbar/>
    <Outlet />
    
        </>
}
export default Layout;