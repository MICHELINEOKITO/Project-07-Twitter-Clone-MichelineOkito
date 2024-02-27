import { Outlet } from "react-router-dom";
import Sidebar from "./Siderbar/Sidebar";
import Trends from "./Trends/Trends"


function Layout({children}) {
    return (
        <>
            <Sidebar/>
            <Outlet/>
            <Trends/>
        </>
    );
}

export default Layout;