import { Outlet } from "react-router-dom";
import Sidebar from "./Siderbar/Sidebar";
import Trends from "./Trends/Trends"
import TweetProvider from "../context/TweetContext";


function Layout({children}) {
    return (
        <>
        <TweetProvider>
            <Sidebar/>
            <Outlet/>
            <Trends/>
        </TweetProvider>
        </>
    );
}

export default Layout;