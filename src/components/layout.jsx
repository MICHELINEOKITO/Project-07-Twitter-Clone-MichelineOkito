import { Outlet } from "react-router-dom";


function Layout({children}) {
    return (
        <>
            <div className="left-sidebar"/>
            <Outlet/>
            <div className="right-sidebar" />
        </>
    );
}

export default Layout;